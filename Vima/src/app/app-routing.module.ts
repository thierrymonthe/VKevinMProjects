import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Home
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: "Homepage" } },
  { path: 'home-v2', loadChildren: () => import('./components/pages/home-two/home-two.module').then(m => m.HomeTwoModule), data: { breadcrumb: "Homepage" } },
  { path: 'home-v3', loadChildren: () => import('./components/pages/home-three/home-three.module').then(m => m.HomeThreeModule), data: { breadcrumb: "Homepage" } },
  { path: 'home-v4', loadChildren: () => import('./components/pages/home-four/home-four.module').then(m => m.HomeFourModule), data: { breadcrumb: "Homepage" } },
  { path: 'home-v5', loadChildren: () => import('./components/pages/home-five/home-five.module').then(m => m.HomeFiveModule), data: { breadcrumb: "Homepage" } },
  // About
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: "About Us" } },
  // Shop
  { path: 'shop-left', loadChildren: () => import('./components/pages/shop-left/shop-left.module').then(m => m.ShopLeftModule), data: { breadcrumb: "Shop Left" } },
  { path: 'shop-right', loadChildren: () => import('./components/pages/shop-right/shop-right.module').then(m => m.ShopRightModule), data: { breadcrumb: "Shop Right" } },
  { path: 'shop/cat/:catId', loadChildren: () => import('./components/pages/shop-left/shop-left.module').then(m => m.ShopLeftModule), data: { breadcrumb: "Shop Left" } },
  { path: 'shop/tag/:tagId', loadChildren: () => import('./components/pages/shop-left/shop-left.module').then(m => m.ShopLeftModule), data: { breadcrumb: "Shop Left" } },
  { path: 'shop/:minPrice/:maxPrice', loadChildren: () => import('./components/pages/shop-left/shop-left.module').then(m => m.ShopLeftModule), data: { breadcrumb: "Shop Left" } },
  { path: 'shop-details/:id', loadChildren: () => import('./components/pages/shop-details/shop-details.module').then(m => m.ShopDetailsModule), data: { breadcrumb: "Shop Details" } },
  // Pages(Donation)
  { path: 'donation-grid', loadChildren: () => import('./components/pages/donation-archive/donation-archive.module').then(m => m.DonationArchiveModule), data: { breadcrumb: "Donation Archive" } },
  { path: 'donation/cat/:catId', loadChildren: () => import('./components/pages/donation-archive/donation-archive.module').then(m => m.DonationArchiveModule), data: { breadcrumb: "Donation Archive" } },
  { path: 'donation/tag/:tagId', loadChildren: () => import('./components/pages/donation-archive/donation-archive.module').then(m => m.DonationArchiveModule), data: { breadcrumb: "Donation Archive" } },
  { path: 'donation-details/:id', loadChildren: () => import('./components/pages/donation-details/donation-details.module').then(m => m.DonationDetailsModule), data: { breadcrumb: "Donation Details" } },
  // Pages(Extra)
  { path: 'wishlist', loadChildren: () => import('./components/pages/wishlist/wishlist.module').then(m => m.WishlistModule), data: { breadcrumb: "Wishlist" } },
  { path: 'cart', loadChildren: () => import('./components/pages/cart/cart.module').then(m => m.CartModule), data: { breadcrumb: "Cart" } },
  { path: 'checkout', loadChildren: () => import('./components/pages/checkout/checkout.module').then(m => m.CheckoutModule), data: { breadcrumb: "Checkout" } },
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: "Contact" } },
  { path: 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule), data: { breadcrumb: "Login" } },
  { path: 'register', loadChildren: () => import('./components/pages/register/register.module').then(m => m.RegisterModule), data: { breadcrumb: "Register" } },
  { path: 'error-404', loadChildren: () => import('./components/pages/error/error.module').then(m => m.ErrorModule), data: { breadcrumb: "Error 404" } },
  // Blog
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/blog-left/blog-left.module').then(m => m.BlogLeftModule), data: { breadcrumb: "Blog Left" } },
  { path: 'blog/author/:authorId', loadChildren: () => import('./components/pages/blog-left/blog-left.module').then(m => m.BlogLeftModule), data: { breadcrumb: "Blog Left" } },
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/blog-left/blog-left.module').then(m => m.BlogLeftModule), data: { breadcrumb: "Blog Left" } },
  { path: 'blog-left', loadChildren: () => import('./components/pages/blog-left/blog-left.module').then(m => m.BlogLeftModule), data: { breadcrumb: "Blog Left" } },
  { path: 'blog-right', loadChildren: () => import('./components/pages/blog-right/blog-right.module').then(m => m.BlogRightModule), data: { breadcrumb: "Blog Right" } },
  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: "Blog Details" } },
  // Story
  { path: 'story/tag/:tagId', loadChildren: () => import('./components/pages/story-grid/story-grid.module').then(m => m.StoryGridModule), data: { breadcrumb: "Story Archive" } },
  { path: 'story-grid', loadChildren: () => import('./components/pages/story-grid/story-grid.module').then(m => m.StoryGridModule), data: { breadcrumb: "Story Archive" } },
  { path: 'story-details/:id', loadChildren: () => import('./components/pages/story-details/story-details.module').then(m => m.StoryDetailsModule), data: { breadcrumb: "Story Details" } },
  // Error 404
  { path: '**', loadChildren: () => import('./components/pages/error/error.module').then(m => m.ErrorModule), data: { breadcrumb: "Error 404" } },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
