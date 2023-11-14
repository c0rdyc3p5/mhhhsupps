import {ConsumerCalculatedOptimized} from "../types.ts";
import {floatToTime} from "../app.tsx";

export function OptimizedRunDataTable(props: {consumers: ConsumerCalculatedOptimized[]}) {
  return (
    <div>
      <section class={'my-4 bg-dark'}>
        <div className="consumers-table-wrapper">
          <div className="consumers-table-inner">
            <div class={'consumers-header grid grid-cols-5 [&>h6]:text-center [&>h6]:p-2'} style={{paddingRight: props.consumers.length > 3 ? '11px' : ''}}>
              <h6>Name</h6>
              <h6>Inventory</h6>
              <h6>mSupps for Equalization</h6>
              <h6>mSupps for Optimization</h6>
              <h6>Total to Add</h6>
            </div>
            <div class={'consumers-body max-h-[115px] overflow-x-hidden overflow-y-auto'}>
              {props.consumers.map((consumer) => {
                return (
                  <div class={'grid grid-cols-5 items-center [&>span]:p-2 [&>*]:text-center'}>
                    <span>{consumer.name}</span>
                    <span>{consumer.inventory}</span>
                    <span>{consumer.suppsToAddForEqualization}</span>
                    <span>{consumer.suppsToAddForOptimization}</span>
                    <span>{consumer.suppsToAddForEqualization! + consumer.suppsToAddForOptimization!}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section class={'mt-4 text-center'}>
        <h2 class={'inline-block p-3 bg-dark rounded'}>Your consumers will run out of mSupps in ~{floatToTime(props.consumers.reduce((acc, c) => acc + c.newTimeUntilEmpty!, 0)  / props.consumers.length)}</h2>
      </section>
    </div>
  )
}
