import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'signin', loadChildren: () => import('./pages/auth/signin/signin.module').then(m => m.SigninModule) },
  { path: 'signup', loadChildren: () => import('./pages/auth/signup/signup.module').then(m => m.SignupModule) },
  { path: 'forget-password', loadChildren: () => import('./pages/auth/forget-password/forget-password.module').then(m => m.ForgetPasswordModule) },
  { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
  { path: 'onboarding', loadChildren: () => import('./pages/onboarding/onboarding.module').then(m => m.OnboardingModule) },
  { path: 'hotel-list', loadChildren: () => import('./pages/hotel-listing/hotel-listing.module').then(m => m.HotelListingModule) },
  { path: 'hotel-details', loadChildren: () => import('./pages/hotel-details/hotel-details.module').then(m => m.HotelDetailsModule) },
  { path: 'filters', loadChildren: () => import('./pages/filters/filters.module').then(m => m.FiltersModule) },
  { path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },
  { path: 'currency', loadChildren: () => import('./pages/currency/currency.module').then(m => m.CurrencyModule) },
  { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'edit-profile', loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfileModule) },
  { path: 'reviews', loadChildren: () => import('./pages/reviews/reviews.module').then(m => m.ReviewsModule) },
  { path: 'card-selection', loadChildren: () => import('./pages/card-selection/card-selection.module').then(m => m.CardSelectionModule) },
  { path: 'booking-confirmation', loadChildren: () => import('./pages/booking-confirmation/booking-confirmation.module').then(m => m.BookingConfirmationModule) },
  { path: 'purchase', loadChildren: () => import('./pages/purchase/purchase.module').then(m => m.PurchaseModule) },
  { path: 'settings-language', loadChildren: () => import('./pages/settings-language/settings-language.module').then(m => m.SettingsLanguageModule) }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

