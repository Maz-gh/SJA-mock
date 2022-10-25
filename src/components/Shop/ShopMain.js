import React from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Link from 'next/link';
import ShopSidebar from './ShopSidebar';

const ShopMain = () => {
    return (
        <main>
            <Breadcrumb breadcrumbTitle="Shop" breadcrumbSubTitle="Shop" />

            <section className="shop-area pt-120 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-12">
                            <ShopSidebar />
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="products-wrapper">
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>Canada Labour Code First Aid Kit - Level A - Padded (Fabric), National Workplace Kits</a></Link></h4>
                                    <span>$24.00</span>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>Eyewash with Eye Cup, 1L - Eyewash</a></Link></h4>
                                    <span>$12.00</span>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>Conform Bandage, 10cm x 4.5m, 12/Bag - Bandages and Dressings</a></Link></h4>
                                    <span>$24.00</span>
                                    <del className="shop-old-price">$75.50</del>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>Fabric Bandages Variety Pack - Bandages and Dressings</a></Link></h4>
                                    <span>$16.00</span>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>Conform Bandage, 10cm x 4.5m, 12/Bag - Bandages and Dressings</a></Link></h4>
                                    <span>$22.00</span>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>Compress Bandage, 10 x 10cm, 12/bag - Bandages and Dressings</a></Link></h4>
                                    <span>$17.00</span>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>Burn Kit - Padded (Fabric), Common First Aid Kit</a></Link></h4>
                                    <span>$24.00</span>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>Compact First Aid Kit - Padded (Fabric), Common First Aid Kit</a></Link></h4>
                                    <span>$13.00</span>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>CSA Personal First Aid Kit - Type 1 - Metal, Regional Workplace Kits</a></Link></h4>
                                    <span>$22.00</span>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>CSA Personal First Aid Kit - Type 1 - Nylon, Regional Workplace Kits</a></Link></h4>
                                    <span>$24.00</span>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>CSA Personal First Aid Kit - Type 1 - Nylon, Regional Workplace Kits</a></Link></h4>
                                    <span>$24.00</span>
                                    <del className="shop-old-price">$75.50</del>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>Fabric Bandages Variety Pack - Bandages and Dressings</a></Link></h4>
                                    <span>$23.00</span>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>CSA Personal First Aid Kit - Type 1 - Nylon, Regional Workplace Kits</a></Link></h4>
                                    <span>$32.00</span>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>Eyewash Station, Dual Eyewash, Eye Cup & Mirror, 500ml (Complete) - Eyewash</a></Link></h4>
                                    <span>$21.00</span>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>Eyewash with Eye Cup, 500ml - Eyewash</a></Link></h4>
                                    <span>$75.00</span>
                                    <del className="shop-old-price">$75.50</del>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-items text-center">
                                    <div className="product-img">
                                    <Link href="/shop-details"><a><img src="assets/img/products/product-thumb-1.png" alt="product-img"/></a></Link>
                                    <div className="shop-quick-view">
                                        <ul>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-cart-arrow-down"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist"><a><i className="fal fa-heart"></i></a></Link>
                                            </li>
                                            <li>
                                                <Link href="/cart"><a><i className="fal fa-eye"></i></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="product-content">
                                    <h4><Link href="/shop-details"><a>Eyewash with Eye Cup, 1L - Eyewash</a></Link></h4>
                                    <span>$11.00</span>
                                    <div className="course-icon">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ShopMain;