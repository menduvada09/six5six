import { useState } from "react";
import styles from "./YouMayAlsoLike.module.css";
import ProductSideModal from "./ProductSideModal";

const YouMayAlsoLike = ({ onAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const baseProducts = [
    {
      id: 1,
      title: "CUSTOM NUMBER",
      price: "Rs. 125.00",
      image:
        "https://six5six2025.myshopify.com/cdn/shop/files/7d1750187450007.65894ca1a6076.png?v=1737549130&width=600",
      isCustomCard: true,
      customText: "YOUR NUMBER",
      season: "2025-26",
    },
    {
      id: 2,
      title: "CUSTOM NAME",
      price: "Rs. 125.00",
      image:
        "https://six5six2025.myshopify.com/cdn/shop/files/7d1750187450007.65894ca1a6076.png?v=1737549130&width=600",
      isCustomCard: true,
      customText: "YOUR NAME",
      season: "2025-26",
    },
    {
      id: 3,
      title: "Afghanistan Away Jersey",
      price: "Rs. 1,299.00",
      oldPrice: "Rs. 1,499.00",
      image:
        "https://six5six2025.myshopify.com/cdn/shop/files/AFG-AwayLarge.jpg?v=1746015663&width=533",
      discount: "13% OFF",
      season: "2025-26",
    },
    {
      id: 4,
      title: "ASH COORDS (JACKET)",
      price: "Rs. 3,500.00",
      image:
        "https://six5six2025.myshopify.com/cdn/shop/files/123_2x_ec6817b1-b698-438d-97c9-c73c7330c047.webp?v=1746015669&width=600",
      season: "2025-26",
    },
    {
      id: 5,
      title: "DO NOT BUY 2",
      price: "Rs. 10.00",
      oldPrice: "Rs. 50.00",
      image:
        "https://six5six2025.myshopify.com/cdn/shop/files/456_2x_b44b96f0-db35-420c-aad3-9d8c4077157f.png?v=1737526731&width=600",
      discount: "80% OFF",
      season: "2025-26",
    },
  ];

  const products = [
    ...baseProducts,
    ...baseProducts.map((p) => ({ ...p, id: p.id + 5 })),
  ];

  const handleAddClick = (product) => {
    const formattedProduct = {
      ...product,
      discountedPrice: product.price,
      originalPrice: product.oldPrice || null,
    };
    setSelectedProduct(formattedProduct);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>You may also like</h2>
      <div className={styles.scrollWrapper}>
        <div className={styles.productsSlider}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageWrapper}>
                <div className={styles.badgeContainer}>
                  {product.discount && (
                    <span className={styles.discountBadge}>
                      {product.discount}
                    </span>
                  )}
                  {product.season && (
                    <span className={styles.seasonBadge}>{product.season}</span>
                  )}
                </div>

                {product.isCustomCard ? (
                  <div className={styles.customCardContent}>
                    <span className={styles.customCardText}>
                      {product.customText}
                    </span>
                  </div>
                ) : (
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.productImage}
                    loading="lazy"
                  />
                )}
              </div>

              <div className={styles.detailsRow}>
                <div className={styles.metaInfo}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <div className={styles.priceContainer}>
                    {product.oldPrice && (
                      <span className={styles.oldPrice}>
                        {product.oldPrice}
                      </span>
                    )}
                    <span className={styles.currentPrice}>{product.price}</span>
                  </div>
                </div>

                <button
                  className={styles.addBtn}
                  aria-label={`Add ${product.title} to cart`}
                  onClick={() => handleAddClick(product)}
                >
                  <span className={styles.addText}>ADD</span>
                  <svg
                    className={styles.cartIconSvg}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <ProductSideModal
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
          onAddToCart={onAddToCart}
        />
      )}
    </div>
  );
};

export default YouMayAlsoLike;
