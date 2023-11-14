import {ConsumerCalculatedHours} from "../types.ts";
import {floatToTime} from "../app.tsx";

export function WantedRunHourDataTable(props: {consumers: ConsumerCalculatedHours[]}) {
  return (
    <div>
      <section class={'my-4 bg-dark consumers-table'}>
        <div className="consumers-table-wrapper">
          <div className="consumers-table-inner">
            <div class={'consumers-header grid grid-cols-4 [&>h6]:text-center [&>h6]:p-2'} style={{paddingRight: props.consumers.length > 3 ? '11px' : ''}}>
              <h6>Name</h6>
              <h6>In Inventory</h6>
              <h6>mSupps to Add</h6>
              <h6>Time until empty</h6>
            </div>
            <div class={'consumers-body max-h-[115px] overflow-x-hidden overflow-y-auto'}>
              {props.consumers.map((consumer) => (
                <div class={'grid grid-cols-4 items-center [&>span]:p-2 [&>*]:text-center'}>
                  <span>{consumer.name}</span>
                  <span>{consumer.inventory}</span>
                  <span>{consumer.suppsToAddForWantedRunningTime}</span>
                  <span>{floatToTime(consumer.newTimeUntilEmpty!)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section class={'mt-4 text-center'}>
        <h2 class={'inline-block p-3 bg-dark rounded'}>You need to farm {props.consumers.reduce((acc, consumer) => acc + consumer.suppsToAddForWantedRunningTime!, 0)} mSupps</h2>
      </section>
    </div>
  )
}
