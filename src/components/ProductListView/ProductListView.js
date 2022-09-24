import PropTypes from 'prop-types';
import s from './ProductListView.module.scss';

export default function ProductListView({ products, onDelete}) {
  return (
    <ul className={s.product_list}>
      {products.map(({ id, imageUrl, name, count, width, weight, height,comment }) => {
        return (
          <li key={id}>
            <ul className={s.product_colum}>
              <li className={s.product_item}>Product #{id}</li>
              <li>
                <img src={imageUrl} alt={name} width="200" height="150"/>
              </li>
              <li className={s.product_item}>{name}</li>
              <li className={s.product_item}>Count: {count}</li>
              <li className={s.product_item}>Width:  {width}</li>
              <li className={s.product_item}>Height: {height}</li>
              <li className={s.product_item}>Weight: {weight}</li>
              <li className={s.product_item}>{comment}</li>
              <button className={s.button} onClick={onDelete} id={id}>Delete product</button>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

ProductListView.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
};
