// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import History from "../components/History";
import { useEffect } from "react";
import { getPurchasesThunk } from "../store/slices/purchases.slice";
import { Link } from "react-router-dom";
import PurchaseItem from "../components/PurchaseItem";

const Purchases = () => {
  const dispatch = useDispatch();
  const purchases = useSelector((state) => state.purchases);

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, [dispatch]);

  return (
    <section className="main-container purchases">
      <History currentPage="Purchases" />
      <h1>My purchases</h1>
      {purchases.length ? (
        <ul className="purchase-products-list">
          {purchases.map((purchase) => (
            <PurchaseItem purchase={purchase} key={purchase.id} />
          ))}
        </ul>
      ) : (
        <p className="no-purchases-message">
          You haven`t bought anything yet. <Link to="/">See Products</Link>
        </p>
      )}
    </section>
  );
};

export default Purchases;
