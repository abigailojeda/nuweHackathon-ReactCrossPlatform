import React, {useState} from 'react';
import './../styles/transactions.scss';
import './../styles/transactionsSettings.scss';
import { Conversion } from './transactions/Conversion';
import { LastTenDays } from './transactions/LastTenDays';
import { LastYearMonthly } from './transactions/LastYearMonthly';
import { WeeklyExpenses } from './transactions/WeeklyExpenses';





export const TransactionsView = () => {

  const [selected, setSelected] = useState('conversion');
  const [option, setOption] = useState(1);

  const handleSelected = (selection, a) =>{
    setSelected(selection);

    setOption(a);
  }

  const transactions = [
    {
      
      id: 0,
      type:'last month',
      quantity:35
    },
    {
      id: 1,
      type:'today',
      quantity:3
    }
  ]

  return (
   <>
    <div className='transactions-title-cont-pc'>
        <h3>Dashboard</h3>
    </div>

    <div className='transactions-title-cont-mobile'>
        <h2>Transactions history</h2>
        <h4>These are your monthly and daily actions. 📊</h4>

    </div>

    <section className='transactions-cont'>

    <div className='transactions-left'>
    <div className='transactions-abstract'>
    {
      transactions.map((item)=> (
      
        <div className='transactions-item appear'
        key={item.id}
        >
          <h6 className='transaction-title'>Transactions</h6>
          <h1>{item.quantity}</h1>
          <h6 className='transaction-type'>{item.type}</h6>
        </div>
  
     
      ))
    }
     </div>

     <div className='transaction-year-cont appear'>

       <div className='separator'></div>

       <div className='char-selection'>
         <h2>...</h2>
         <div className='char-selection-menu'>
            <h5 onClick={()=>handleSelected('conversion', 0)}>Conversions</h5>
            <h5 onClick={()=>handleSelected('last-mon', 0)}>Last Year</h5>
            <h5 onClick={()=>handleSelected('last-dai', 0)}>Last 10 Days</h5>
        </div>
       </div>

       <div className='char-selection-menu-mb'>
            <h5 className={option === 1 ? 'selected' : ''} onClick={()=>handleSelected('conversion', 1)}>Conversions</h5>
            <h5 className={option === 2 ? 'selected' : ''} onClick={()=>handleSelected('last-mon', 2)}>Last Year</h5>
            <h5 className={option === 3 ? 'selected' : ''} onClick={()=>handleSelected('last-dai', 3)}>Last 10 Days</h5>
        </div>
       

    {
      
     selected === 'conversion' ?<><h6 className='transaction-title pc'>Conversions</h6><Conversion/></>   : ''
    }
   

    {
     selected === 'last-mon' ? <><h6 className='transaction-title pc'>Last Year</h6><LastYearMonthly/></> : ''
    }
   

    {
     selected === 'last-dai' ? <><h6 className='transaction-title pc'>Last 10 Days</h6><LastTenDays/></> : ''
    }
   

     </div>

     </div>

     <div className='transactions-right appear'>
    <WeeklyExpenses />
      </div>
     </section>

 
    

   </>
  )
}
