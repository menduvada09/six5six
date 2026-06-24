import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

export default function Cart({
  isOpen,
  onClose,
  items = [],
  onUpdateQuantity,
  onRemoveItem,
}) {
  const isCartEmpty = items.length === 0;
  const cartSubtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div
      className={`${styles.cartOverlay} ${isOpen ? styles.active : ""}`}
      onClick={onClose}
    >
      <div className={styles.cartPanel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.cartHeader}>
          {!isCartEmpty && (
            <span className={styles.bagTitle}>bag[{totalItems}]</span>
          )}
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close Cart"
            style={isCartEmpty ? { marginLeft: "auto" } : {}}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.cartContent}>
          {isCartEmpty ? (
            <div className={styles.emptyCartView}>
              <h2 className={styles.emptyHeading}>Your cart is empty</h2>
              <button className={styles.continueBtn} onClick={onClose}>
                Continue shopping
              </button>
              <div className={styles.loginPrompt}>
                <span>Have an account? </span>
                <span className={styles.loginLink}>
                  <Link to="/login" onClick={onClose}>
                    Log in
                  </Link>
                  <span> to check out faster.</span>
                </span>
              </div>
            </div>
          ) : (
            <div className={styles.itemsWrapper}>
              <div className={styles.itemList}>
                {items.map((item, index) => (
                  <div key={index} className={styles.cartItem}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.itemImg}
                    />
                    <div className={styles.itemDetails}>
                      <div className={styles.itemTitleRow}>
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                      </div>
                      <div className={styles.itemMetaRow}>
                        <span className={styles.itemPrice}>
                          Rs. {item.price.toLocaleString()}.00
                        </span>
                        <span className={styles.itemSize}>
                          Size : {item.size}
                        </span>
                      </div>

                      {(item.customName || item.customNumber) && (
                        <p className={styles.itemCustomization}>
                          {item.customName && `Name: ${item.customName}`}
                          {item.customNumber && ` | No: ${item.customNumber}`}
                        </p>
                      )}

                      <div className={styles.itemActions}>
                        <div className={styles.quantitySelector}>
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                item.id,
                                item.size,
                                item.customName,
                                item.customNumber,
                                item.quantity - 1
                              )
                            }
                            disabled={item.quantity <= 1}
                          >
                            —
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                item.id,
                                item.size,
                                item.customName,
                                item.customNumber,
                                item.quantity + 1
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <button
                          className={styles.removeBtn}
                          onClick={() =>
                            onRemoveItem(
                              item.id,
                              item.size,
                              item.customName,
                              item.customNumber
                            )
                          }
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.cartFooter}>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Estimated total</span>
                  <span className={styles.summaryValue}>
                    Rs. {cartSubtotal.toLocaleString()}.00
                  </span>
                </div>
                <p className={styles.taxNotice}>
                  Taxes, discounts and shipping calculated at checkout.
                </p>
                <Link to="/checkout">
                  <button className={styles.checkoutBtn}>Check out</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
