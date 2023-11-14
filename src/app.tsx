import {useEffect, useRef, useState} from "preact/compat";
import autoAnimate from '@formkit/auto-animate';
import {Consumer, ConsumerCalculatedHours, ConsumerCalculatedOptimized} from "./types";
import {WantedRunHourDataTable} from "./components/WantedRunHourDataTable.tsx";
import {OptimizedRunDataTable} from "./components/OptimizedRunDataTable.tsx";

export function floatToTime(float: number) {
  const hours = Math.floor(float);
  const minutes = Math.round((float - hours) * 60).toString().padStart(2, '0');
  return `${hours}h${minutes}m`;
}

export function App() {
  const [nameInput, setNameInput] = useState<string | ''>('');
  const [mSuppsPerHourInput, setMSuppsPerHourInput] = useState<number | ''>('');
  const [inventoryInput, setInventoryInput] = useState<number | ''>('');
  const [consumers, setConsumers] = useState<Consumer[]>([]);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const addConsumer = () => {
    return () => {
      if (!nameInput || !mSuppsPerHourInput || !inventoryInput) {
        return;
      }

      setConsumers([
        ...consumers,
        {
          name: nameInput,
          mSuppsPerHour: mSuppsPerHourInput,
          inventory: inventoryInput,
          timeUntilEmpty: parseFloat((inventoryInput / mSuppsPerHourInput).toFixed(2))
        }
      ]);

      setNameInput('');
      setMSuppsPerHourInput('');
      setInventoryInput('');
      nameInputRef.current!.focus();
    }
  }

  const removeConsumer = (consumer: Consumer) => {
    return () => {
      setConsumers(consumers.filter((c) => c !== consumer));
    }
  }

  const [wantedRunHourInput, setWantedRunHourInput] = useState<number | ''>('');
  const [mSuppsStockpileInput, setMSuppsStockpileInput] = useState<number | ''>('');

  const [resultDataTable, setResultDataTable] = useState<any>(null);

  const calculateMSuppsForWantedHours = () => {
    const _wantedHours: number = wantedRunHourInput as number;
    const _consumers: ConsumerCalculatedHours[] = [... consumers];

    const calculatedConsumers = _consumers.map((c) => {
      const suppsToAddForWantedRunningTime = Math.ceil((_wantedHours - c.timeUntilEmpty) * c.mSuppsPerHour)

      return {
        ...c,
        suppsToAddForWantedRunningTime,
        newTimeUntilEmpty: parseFloat(((c.inventory + suppsToAddForWantedRunningTime) / c.mSuppsPerHour).toFixed(2))
      }
    });

    setResultDataTable(<WantedRunHourDataTable consumers={calculatedConsumers} />)
  }

  const calculateMinimumMSuppsForEqualization = () => {
    const _consumers: ConsumerCalculatedOptimized[] = [... consumers];

    const longestRunningConsumer: number = Math.max(...consumers.map((c) => c.timeUntilEmpty));
    const equalizedConsumers: ConsumerCalculatedOptimized[] = _consumers.map((c) => {
      return {
        ...c,
        suppsToAddForEqualization: Math.ceil((longestRunningConsumer - c.timeUntilEmpty) * c.mSuppsPerHour)
      }
    });

    return equalizedConsumers;
  }

  const optimizeMSuppsWithStockpile = () => {
    const _mSuppsInStockpile: number = mSuppsStockpileInput as number;
    const equalizedConsumers = calculateMinimumMSuppsForEqualization();
    const remainingMSuppsInStockpile: number = _mSuppsInStockpile - equalizedConsumers.reduce((acc, c) => acc + c.suppsToAddForEqualization!, 0)

    const consumptionPerHour = equalizedConsumers.reduce((acc, c) => acc + c.mSuppsPerHour, 0);
    const optimizedConsumers: ConsumerCalculatedOptimized[] = equalizedConsumers.map((c) => {
      const suppsToAddForOptimization = Math.floor((c.mSuppsPerHour / consumptionPerHour) * remainingMSuppsInStockpile);
      return {
        ...c,
        suppsToAddForOptimization,
        newTimeUntilEmpty: parseFloat(((c.inventory + c.suppsToAddForEqualization! + suppsToAddForOptimization) / c.mSuppsPerHour).toFixed(2))
      }
    });

    setResultDataTable(<OptimizedRunDataTable consumers={optimizedConsumers} />);
  }

  const consumerTableDataContainer = useRef(null);
  const resultDataTableContainer = useRef(null);
  useEffect(() => {
    consumerTableDataContainer.current && autoAnimate(consumerTableDataContainer.current)
    resultDataTableContainer.current && autoAnimate(resultDataTableContainer.current)
  }, [consumerTableDataContainer, resultDataTableContainer])

  return (
    <main class={'p-6 rounded bg-gray video-game-shadow max-w-[1024px] w-full overflow-auto'}>
      <section class={'mb-3'}>
        <h1 class={'text-center'}>
          mSupps Calculator and Optimizer
        </h1>
      </section>
      <section class={'my-4'}>
        <h4 class={'mb-1'}>Consumers</h4>
        <div class={'grid grid-cols-1 lg:grid-cols-4 gap-1'}>
          <input
            placeholder={'Name'}
            type="text"
            onChange={(e) => setNameInput((e.target as HTMLInputElement).value)}
            value={nameInput}
            ref={nameInputRef}
          />
          <input
            placeholder={'mSupps per hour'}
            type="number"
            onChange={(e) => setMSuppsPerHourInput(parseInt((e.target as HTMLInputElement).value))}
            value={mSuppsPerHourInput}
          />
          <input
            placeholder={'Inventory'}
            type="number"
            onChange={(e) => setInventoryInput(parseInt((e.target as HTMLInputElement).value))}
            value={inventoryInput}
          />
          <button class={'btn btn-primary'} onClick={addConsumer()} disabled={!nameInput || !mSuppsPerHourInput || !inventoryInput}>Add</button>
        </div>
      </section>
      <section class={'my-4 bg-dark'}>
        <div className="consumers-table-wrapper">
          <div className="consumers-table-inner">
            <div class={'consumers-header grid grid-cols-5 [&>h6]:text-center [&>h6]:p-2'} style={{paddingRight: consumers.length > 3 ? '11px' : ''}}>
              <h6>Name</h6>
              <h6>mSupps per hour</h6>
              <h6>Inventory</h6>
              <h6>Time until empty</h6>
              <h6>Remove</h6>
            </div>
            <div class={'consumers-body h-[115px] overflow-x-hidden overflow-y-auto'} ref={consumerTableDataContainer}>
              {consumers.map((consumer) => (
                <div class={'grid grid-cols-5 items-center [&>span]:p-2 [&>*]:text-center'}>
                  <span>{consumer.name}</span>
                  <span>{consumer.mSuppsPerHour}</span>
                  <span>{consumer.inventory}</span>
                  <span>{floatToTime(consumer.timeUntilEmpty)}</span>
                  <div>
                    <button class={'btn btn-delete'} onClick={removeConsumer(consumer)}>X</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section class={'my-4 calculation-type'}>
        <em class={'text-small mb-3 block'}>When clicking on an input, the minimum to equalize all consumers will be calculated</em>
        <div class={'input-container'}>
          <input
            placeholder={'Wanted run hour'}
            type="number"
            onChange={(e) => setWantedRunHourInput(parseFloat((e.target as HTMLInputElement).value))}
            onClick={(e) => (e.target as HTMLInputElement).value === '' && setWantedRunHourInput(Math.ceil(Math.max(...consumers.map((c) => c.timeUntilEmpty))))}
            min={Math.max(...consumers.map((c) => c.timeUntilEmpty))}
            value={wantedRunHourInput}
            disabled={consumers.length == 0 || !!mSuppsStockpileInput}
          />
          <span class={'font-bold'}>OR</span>
          <input
            placeholder={'mSupps available in stockpile'}
            type="number"
            onChange={(e) => setMSuppsStockpileInput(parseInt((e.target as HTMLInputElement).value))}
            onClick={(e) => (e.target as HTMLInputElement).value === '' && setMSuppsStockpileInput(calculateMinimumMSuppsForEqualization().reduce((acc, c) => acc + c.suppsToAddForEqualization!, 0))}
            value={mSuppsStockpileInput}
            disabled={consumers.length == 0 || !!wantedRunHourInput}
          />
        </div>
      </section>
      <section class={'my-4 w-full grid place-content-center'}>
        <button
          class={'btn btn-primary mx-auto'}
          disabled={(!wantedRunHourInput && !mSuppsStockpileInput)}
          onClick={wantedRunHourInput ? calculateMSuppsForWantedHours : optimizeMSuppsWithStockpile}
        >
          {!wantedRunHourInput && !mSuppsStockpileInput && '?..'}
          {!!wantedRunHourInput && `Calculate`}
          {!!mSuppsStockpileInput && `Optimize`}
        </button>
      </section>
      <section ref={resultDataTableContainer}>
        {resultDataTable}
      </section>
    </main>
  )
}
