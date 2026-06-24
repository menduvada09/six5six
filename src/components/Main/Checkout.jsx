import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";

export default function Checkout({ items = [], onCartClick, closeCart }) {
  useEffect(() => {
    if (closeCart) {
      closeCart();
    }
  }, [closeCart]);

  const subtotal = items.reduce(
    (acc, item) =>
      acc + (item.price || item.discountedPrice || 0) * item.quantity,
    0
  );
  const estimatedTaxes = subtotal > 0 ? 342.0 : 0.0;
  const total = subtotal + estimatedTaxes;

  const [formData, setFormData] = useState({
    contactEmail: "",
    emailOffers: false,
    deliveryCountry: "",
    deliveryFirstName: "",
    deliveryLastName: "",
    deliveryAddress: "",
    deliveryApartment: "",
    deliveryCity: "",
    deliveryState: "",
    deliveryPinCode: "",
    saveInformation: false,
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
    nameOnCard: "",
    useSameBilling: false,
    billingCountry: "",
    billingFirstName: "",
    billingLastName: "",
    billingAddress: "",
    billingApartment: "",
    billingCity: "",
    billingState: "",
    billingPinCode: "",
  });

  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "Australia",
    "Canada",
    "Germany",
    "France",
    "United Arab Emirates",
    "Saudi Arabia",
    "Singapore",
    "Japan",
    "China",
    "Brazil",
    "South Africa",
    "Russia",
    "Italy",
    "Spain",
    "Netherlands",
    "Switzerland",
    "New Zealand",
    "Sweden",
    "Norway",
    "Malaysia",
  ];

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.minimalHeader}>
        <div className={styles.headerInnerContainer}>
          <Link to="/" className={styles.brandLink}>
            six5six2025
          </Link>
          <div onClick={onCartClick} className={styles.cartIconWrapper}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0052cc"
              strokeWidth="1.8"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
        </div>
      </header>

      <div className={styles.checkoutContainer}>
        <div className={styles.leftColumn}>
          <form onSubmit={handleSubmit} className={styles.formStructure}>
            <div className={styles.sectionBlock}>
              <div className={styles.sectionHeaderRow}>
                <h2 className={styles.sectionHeading}>Contact</h2>
                <Link to="/login">
                  <span className={styles.signInLink}>Sign in</span>
                </Link>
              </div>
              <div className={styles.floatingInputWrapper}>
                <input
                  type="text"
                  name="contactEmail"
                  placeholder=" "
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className={styles.floatingInput}
                />
                <label className={styles.floatingLabelText}>
                  Email or mobile phone number
                </label>
                <span className={styles.inputIcon}>?</span>
              </div>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="emailOffers"
                  checked={formData.emailOffers}
                  onChange={handleInputChange}
                  className={styles.checkboxInput}
                />
                <span>Email me with news and offers</span>
              </label>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Delivery</h2>
              <div className={styles.selectWrapper}>
                <label className={styles.selectStaticLabel}>
                  Country/Region
                </label>
                <select
                  name="deliveryCountry"
                  value={formData.deliveryCountry}
                  onChange={handleInputChange}
                  className={styles.selectInput}
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.inputGrid2}>
                <div className={styles.floatingInputWrapper}>
                  <input
                    type="text"
                    name="deliveryFirstName"
                    placeholder=" "
                    value={formData.deliveryFirstName}
                    onChange={handleInputChange}
                    className={styles.floatingInput}
                  />
                  <label className={styles.floatingLabelText}>
                    First name (optional)
                  </label>
                </div>
                <div className={styles.floatingInputWrapper}>
                  <input
                    type="text"
                    name="deliveryLastName"
                    placeholder=" "
                    value={formData.deliveryLastName}
                    onChange={handleInputChange}
                    className={styles.floatingInput}
                  />
                  <label className={styles.floatingLabelText}>Last name</label>
                </div>
              </div>

              <div className={styles.floatingInputWrapper}>
                <input
                  type="text"
                  name="deliveryAddress"
                  placeholder=" "
                  value={formData.deliveryAddress}
                  onChange={handleInputChange}
                  className={styles.floatingInput}
                />
                <label className={styles.floatingLabelText}>Address</label>
                <span className={styles.inputIcon}>🔍</span>
              </div>

              <div className={styles.floatingInputWrapper}>
                <input
                  type="text"
                  name="deliveryApartment"
                  placeholder=" "
                  value={formData.deliveryApartment}
                  onChange={handleInputChange}
                  className={styles.floatingInput}
                />
                <label className={styles.floatingLabelText}>
                  Apartment, suite, etc. (optional)
                </label>
              </div>

              <div className={styles.inputGrid3}>
                <div className={styles.floatingInputWrapper}>
                  <input
                    type="text"
                    name="deliveryCity"
                    placeholder=" "
                    value={formData.deliveryCity}
                    onChange={handleInputChange}
                    className={styles.floatingInput}
                  />
                  <label className={styles.floatingLabelText}>City</label>
                </div>
                <div className={styles.selectWrapper}>
                  <label className={styles.selectStaticLabel}>State</label>
                  <select
                    name="deliveryState"
                    value={formData.deliveryState}
                    onChange={handleInputChange}
                    className={styles.selectInput}
                  >
                    {indianStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.floatingInputWrapper}>
                  <input
                    type="text"
                    name="deliveryPinCode"
                    placeholder=" "
                    value={formData.deliveryPinCode}
                    onChange={handleInputChange}
                    className={styles.floatingInput}
                  />
                  <label className={styles.floatingLabelText}>PIN code</label>
                </div>
              </div>

              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="saveInformation"
                  checked={formData.saveInformation}
                  onChange={handleInputChange}
                  className={styles.checkboxInput}
                />
                <span>Save this information for next time</span>
              </label>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Shipping method</h2>
              <div className={styles.shippingNoticeBox}>
                Enter your shipping address to view available shipping methods.
              </div>
            </div>

            <div className={styles.paymentSectionContainer}>
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>Payment</h2>
                <p className={styles.subTextNotice}>
                  All transactions are secure and encrypted.
                </p>

                <div className={styles.paymentCardBox}>
                  <div className={styles.paymentCardHeader}>
                    <span className={styles.paymentCardTitle}>Credit card</span>
                    <span className={styles.cardBrandBadge}>B</span>
                  </div>

                  <div className={styles.paymentCardBody}>
                    <div className={styles.floatingInputWrapper}>
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder=" "
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className={styles.floatingInput}
                      />
                      <label className={styles.floatingLabelText}>
                        Card number
                      </label>
                      <span className={styles.inputIcon}>🔒</span>
                    </div>

                    <div className={styles.inputGrid2}>
                      <div className={styles.floatingInputWrapper}>
                        <input
                          type="text"
                          name="expiryDate"
                          placeholder=" "
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className={styles.floatingInput}
                        />
                        <label className={styles.floatingLabelText}>
                          Expiration date (MM / YY)
                        </label>
                      </div>
                      <div className={styles.floatingInputWrapper}>
                        <input
                          type="password"
                          name="securityCode"
                          placeholder=" "
                          value={formData.securityCode}
                          onChange={handleInputChange}
                          className={styles.floatingInput}
                        />
                        <label className={styles.floatingLabelText}>
                          Security code
                        </label>
                        <span className={styles.inputIcon}>?</span>
                      </div>
                    </div>

                    <div className={styles.floatingInputWrapper}>
                      <input
                        type="text"
                        name="nameOnCard"
                        placeholder=" "
                        value={formData.nameOnCard}
                        onChange={handleInputChange}
                        className={styles.floatingInput}
                      />
                      <label className={styles.floatingLabelText}>
                        Name on card
                      </label>
                    </div>
                  </div>
                </div>

                <label
                  className={`${styles.checkboxLabel} ${styles.checkboxWrapperSpacing}`}
                >
                  <input
                    type="checkbox"
                    name="useSameBilling"
                    checked={formData.useSameBilling}
                    onChange={handleInputChange}
                    className={styles.checkboxInput}
                  />
                  <span>Use shipping address as billing address</span>
                </label>
              </div>

              {!formData.useSameBilling && (
                <div className={styles.billingSectionBlock}>
                  <h3 className={styles.billingSubHeading}>Billing address</h3>

                  <div className={styles.selectWrapper}>
                    <label className={styles.selectStaticLabel}>
                      Country/Region
                    </label>
                    <select
                      name="billingCountry"
                      value={formData.billingCountry}
                      onChange={handleInputChange}
                      className={styles.selectInput}
                    >
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.inputGrid2}>
                    <div className={styles.floatingInputWrapper}>
                      <input
                        type="text"
                        name="billingFirstName"
                        placeholder=" "
                        value={formData.billingFirstName}
                        onChange={handleInputChange}
                        className={styles.floatingInput}
                      />
                      <label className={styles.floatingLabelText}>
                        First name (optional)
                      </label>
                    </div>
                    <div className={styles.floatingInputWrapper}>
                      <input
                        type="text"
                        name="billingLastName"
                        placeholder=" "
                        value={formData.billingLastName}
                        onChange={handleInputChange}
                        className={styles.floatingInput}
                      />
                      <label className={styles.floatingLabelText}>
                        Last name
                      </label>
                    </div>
                  </div>

                  <div className={styles.floatingInputWrapper}>
                    <input
                      type="text"
                      name="billingAddress"
                      placeholder=" "
                      value={formData.billingAddress}
                      onChange={handleInputChange}
                      className={styles.floatingInput}
                    />
                    <label className={styles.floatingLabelText}>Address</label>
                    <span className={styles.inputIcon}>🔍</span>
                  </div>

                  <div className={styles.floatingInputWrapper}>
                    <input
                      type="text"
                      name="billingApartment"
                      placeholder=" "
                      value={formData.billingApartment}
                      onChange={handleInputChange}
                      className={styles.floatingInput}
                    />
                    <label className={styles.floatingLabelText}>
                      Apartment, suite, etc. (optional)
                    </label>
                  </div>

                  <div className={styles.inputGrid3}>
                    <div className={styles.floatingInputWrapper}>
                      <input
                        type="text"
                        name="billingCity"
                        placeholder=" "
                        value={formData.billingCity}
                        onChange={handleInputChange}
                        className={styles.floatingInput}
                      />
                      <label className={styles.floatingLabelText}>City</label>
                    </div>
                    <div className={styles.selectWrapper}>
                      <label className={styles.selectStaticLabel}>State</label>
                      <select
                        name="billingState"
                        value={formData.billingState}
                        onChange={handleInputChange}
                        className={styles.selectInput}
                      >
                        {indianStates.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.floatingInputWrapper}>
                      <input
                        type="text"
                        name="billingPinCode"
                        placeholder=" "
                        value={formData.billingPinCode}
                        onChange={handleInputChange}
                        className={styles.floatingInput}
                      />
                      <label className={styles.floatingLabelText}>
                        PIN code
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button type="submit" className={styles.payNowButton}>
              Pay now
            </button>
          </form>

          <footer className={styles.policyFooter}>
            <Link to="/refund-return" className={styles.policyLink}>
              Refund policy
            </Link>
            <Link to="/faq" className={styles.policyLink}>
              Shipping
            </Link>
            <Link to="/policy/:type" className={styles.policyLink}>
              Privacy policy
            </Link>
            <Link to="/policy/:type" className={styles.policyLink}>
              Terms of service
            </Link>
          </footer>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.stickySummaryBox}>
            {items.map((item, index) => (
              <div key={index} className={styles.productRow}>
                <div className={styles.productImgContainer}>
                  <img
                    src={item.image || "https://via.placeholder.com/150"}
                    alt={item.title}
                    className={styles.productImg}
                  />
                  <span className={styles.productQtyBadge}>
                    {item.quantity}
                  </span>
                </div>
                <div className={styles.productInfo}>
                  <p className={styles.productTitle}>{item.title}</p>
                  <p className={styles.productMeta}>{item.size}</p>
                </div>
                <div className={styles.productPriceText}>
                  ₹{((item.price || 0) * item.quantity).toLocaleString("en-IN")}
                  .00
                </div>
              </div>
            ))}

            <div className={styles.calculationBlock}>
              <div className={styles.calcRow}>
                <span>Subtotal</span>
                <span className={styles.calcValueBold}>
                  ₹{subtotal.toLocaleString("en-IN")}.00
                </span>
              </div>
              <div className={styles.calcRow}>
                <span>
                  Shipping <span className={styles.infoIcon}>?</span>
                </span>
                <span className={styles.shippingPlaceholder}>
                  Enter shipping address
                </span>
              </div>
              <div className={styles.calcRow}>
                <span>
                  Estimated taxes <span className={styles.infoIcon}>?</span>
                </span>
                <span className={styles.calcValueBold}>
                  ₹{estimatedTaxes.toFixed(2)}
                </span>
              </div>
            </div>

            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>Total</span>
              <div className={styles.totalPriceArea}>
                <span className={styles.currencyCode}>INR</span>
                <span className={styles.bigTotalPrice}>
                  ₹{total.toLocaleString("en-IN")}.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
