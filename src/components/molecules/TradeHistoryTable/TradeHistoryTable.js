import React  from 'react';
import styles from './TradeHistoryTable.scss';
import classNames from 'classnames/bind';
import {limitDigit} from 'lib/utils';
import moment from 'moment';
import scuize from 'lib/hoc/scuize';
import ReactTooltip from 'react-tooltip';
import { Spinner } from 'components';

const cx = classNames.bind(styles);

const statusMap = {
  'processed': 'processed',
  'waiting': 'waiting',
  'cancelled': 'cancelled'
}

const Row = ({date, type, rate, amount, personal, status, onCancelOrder, id, showCurrency, currencyPair}) => {
  const d = new Date(date);
  const calculatedGMT = new Date(d.valueOf() - d.getTimezoneOffset() * 60000);


  const dateString = (() => {
    const t = moment(personal ? date : calculatedGMT);
    const now = moment();
    if(t.format('YYYYMMDD') !== now.format('YYYYMMDD')) {
      return t.format('MM/D');
    }
    return t.format('HH:mm');
  })()

  return (
    <div className={cx('row', 'flicker', { personal })} onDoubleClick={
      () => {
        if(!onCancelOrder) return;
        if(status !== 'waiting') return;
        onCancelOrder(id);
      }
    }>
    {
      showCurrency && <div className={cx('col', 'currency')}>{currencyPair && currencyPair.split('_')[1]}</div>
    }
      <div className={cx('col', 'time')}>
        {dateString}
      </div>
      <div className={cx('col', 'type', type)}>
        {type === 'sell' ? 'sell' : 'buying'}
      </div>
      <div className={cx('col')}>
        {limitDigit(rate)}
      </div>
      <div className={cx('col')}>
        {limitDigit(amount)}
      </div>
      { personal && <div className={cx('col', 'status', status)}>
          {statusMap[status]}
        </div>}
    </div>
  )
}

const OptimizedRow = scuize(function (nextProps, nextState) {
  return this.props.status !== nextProps.status;
})(Row);




// // date | type | price | amount
const TradeHistoryTable = ({data, personal, onCancelOrder, onScroll, hasNext, forPage, showTooltip}) => {

  const tooltip = showTooltip && personal ? {
    'data-tip': "Cancel the transaction by double-clicking the item",
    'data-effect': 'solid'
  } : {} 

  const rows = data && data.map(
    row => {
      if(!personal) {
        return <OptimizedRow id={row.get('tradeID')} key={row.get('tradeID')} {...row.toJS()}/>;
      } else {
        const { 
          _id, price, amount, status, sell, currencyPair, date
        } = row.toJS();
        return <OptimizedRow 
            personal 
            currencyPair={currencyPair} 
            key={_id} 
            id={_id} 
            rate={price} 
            amount={amount} 
            type={sell ? 'sell' : 'buy'} 
            status={status} 
            onCancelOrder={onCancelOrder} 
            date={date} 
            showCurrency={forPage}
          />
      }
    }
  )
  return (
    <div className={cx('trade-history-table-wrapper')}>
      <div className={cx('trade-history-table', { forPage })}>
        { !forPage && <div className={cx('title')}>
          {personal ? 'my ' : '' }Transaction history
        </div> }
        <div className={cx('head')}>
          { forPage && <div className={cx('col', 'currency')}>
          Coin
          </div> }
          <div className={cx('col', 'time')}>
          Time
          </div>
          <div className={cx('col', 'type')}>
          Kinds
          </div>
          <div className={cx('col')}>
          Price
          </div>
          <div className={cx('col')}>
          Volume
          </div>
          { personal && <div className={cx('col', 'status')}>
          State
          </div>}
        </div>
        <div className={cx('rows')} {...tooltip} onScroll={onScroll}>
          {rows}
          { hasNext && (
            <div className={cx('scroll-block')}>
              <Spinner size="5rem"/>
            </div>
          )}
          {
            rows.isEmpty() && forPage && <div className={cx('empty')}>There is no transaction history</div>
          }

        </div>
        <ReactTooltip />
      </div>
    </div>
  );
};

export default TradeHistoryTable;