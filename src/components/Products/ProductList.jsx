import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductList.module.css";
import Footer from "../Main/Footer";
import Filter from "./Filter";
import ProductSideModal from "./ProductSideModal";

const ProductList = ({
  showFilter = true,
  className,
  onAddToCart,
  wishlistItems = [],
  onOpenWishlistModal,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: "20% OFF",
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: "Rs. 2,400.00",
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 2,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 3,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 4,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: "13% OFF",
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: "Rs. 2,400.00",
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 5,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 6,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 7,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 8,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: "80% OFF",
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: "Rs. 2,400.00",
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 9,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 10,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 11,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 12,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: "22% OFF",
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: "Rs. 2,400.00",
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 13,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 14,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 15,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 16,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 17,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 18,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 19,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: "15% OFF",
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: "Rs. 2,400.00",
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 20,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 21,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 22,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: "10% OFF",
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: "Rs. 2,400.00",
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 23,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,900.00",
    },
    {
      id: 24,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: null,
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: null,
      discountedPrice: "Rs. 1,250.00",
    },
    {
      id: 25,
      image:
        "https://six5six.in/cdn/shop/files/KKR-Sus-Shirt-02.jpg?v=1778064368&width=1445",
      discount: "50% OFF",
      season: "2025-26",
      title: "KKR Black Knight Tee",
      originalPrice: "Rs. 2,400.00",
      discountedPrice: "Rs. 1,199.00",
    },
  ];

  const handleNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddClick = (e, product) => {
    e.stopPropagation();
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleBookmarkClick = (e, product) => {
    e.stopPropagation();

    const isAlreadyWishlisted = wishlistItems.some(
      (item) => item.id === product.id
    );

    if (!isAlreadyWishlisted && onOpenWishlistModal) {
      onOpenWishlistModal(product);
    }
  };

  return (
    <>
      {showFilter && <Filter />}

      <div className={`${styles.wrapper} ${className || ""}`}>
        <div className={styles.grid}>
          {products.map((product) => {
            const isWishlisted = wishlistItems.some(
              (item) => item.id === product.id
            );

            return (
              <div
                key={product.id}
                className={styles.card}
                onClick={() => handleCardClick(product.id)}
                style={{ cursor: "pointer" }}
              >
                <div className={styles.imageContainer}>
                  <div className={styles.badgeRow}>
                    {product.discount && (
                      <span className={styles.discountBadge}>
                        {product.discount}
                      </span>
                    )}
                    <span className={styles.seasonBadge}>{product.season}</span>
                  </div>

                  <button
                    className={`${styles.bookmarkButton} ${
                      isWishlisted ? styles.bookmarked : ""
                    }`}
                    aria-label="Save item"
                    onClick={(e) => handleBookmarkClick(e, product)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill={isWishlisted ? "#ffffff" : "none"}
                      stroke={isWishlisted ? "#ffffff" : "currentColor"}
                      strokeWidth="2"
                    >
                      <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                    </svg>
                  </button>

                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.productImg}
                    loading="lazy"
                  />
                </div>

                <div className={styles.detailsContainer}>
                  <div className={styles.topInfoRow}>
                    <h3 className={styles.productTitle}>{product.title}</h3>
                    <div className={styles.buttonSide}>
                      <button
                        className={styles.addButton}
                        onClick={(e) => handleAddClick(e, product)}
                      >
                        <span className={styles.addText}>ADD</span>
                        <svg className={styles.bagIcon} viewBox="0 0 32 32">
                          <polygon
                            className={styles.bagHandle}
                            points="12,11 14,7 18,7 20,11"
                          />
                          <rect
                            className={styles.bagBody}
                            x="6"
                            y="11"
                            width="20"
                            height="15"
                            rx="4"
                            ry="4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className={styles.priceContainer}>
                    {product.originalPrice && (
                      <span className={styles.oldPrice}>
                        {product.originalPrice}
                      </span>
                    )}
                    <span className={styles.currentPrice}>
                      {product.discountedPrice}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.paginationRow}>
          <div className={styles.pagination}>
            <div
              className={`${styles.pageItem} ${
                currentPage === 1 ? styles.activeItem : ""
              }`}
              onClick={() => setCurrentPage(1)}
            >
              <span className={styles.pageNumber}>1</span>
              {currentPage === 1 && <div className={styles.activeLine}></div>}
            </div>
            <div
              className={`${styles.pageItem} ${
                currentPage === 2 ? styles.activeItem : ""
              }`}
              onClick={() => setCurrentPage(2)}
            >
              <span className={styles.pageNumber}>2</span>
              {currentPage === 2 && <div className={styles.activeLine}></div>}
            </div>
            <div
              className={`${styles.pageItem} ${
                currentPage === 3 ? styles.activeItem : ""
              }`}
              onClick={() => setCurrentPage(3)}
            >
              <span className={styles.pageNumber}>3</span>
              {currentPage === 3 && <div className={styles.activeLine}></div>}
            </div>
            <div className={styles.pageItem} onClick={handleNextPage}>
              <span className={styles.pageArrow}>&gt;</span>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProductSideModal
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
          onAddToCart={onAddToCart}
        />
      )}

      <Footer />
    </>
  );
};

export default ProductList;
