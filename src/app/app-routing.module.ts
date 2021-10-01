import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/features/tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'signin', loadChildren: () => import('./modules/features/pages/auth/signin/signin.module').then(m => m.SigninModule) },
  { path: 'signup', loadChildren: () => import('./modules/features/pages/auth/signup/signup.module').then(m => m.SignupModule) },
  { path: 'forget-password', loadChildren: () => import('./modules/features/pages/auth/forget-password/forget-password.module').then(m => m.ForgetPasswordModule) },
  { path: 'landing', loadChildren: () => import('./modules/features/pages/landing/landing.module').then(m => m.LandingModule) },
  { path: 'onboarding', loadChildren: () => import('./modules/features/pages/onboarding/onboarding.module').then(m => m.OnboardingModule) },
  { path: 'hotel-list', loadChildren: () => import('./modules/features/pages/hotel-listing/hotel-listing.module').then(m => m.HotelListingModule) },
  { path: 'hotel-details', loadChildren: () => import('./modules/features/pages/hotel-details/hotel-details.module').then(m => m.HotelDetailsModule) },
  { path: 'filters', loadChildren: () => import('./modules/features/pages/filters/filters.module').then(m => m.FiltersModule) },
  { path: 'search', loadChildren: () => import('./modules/features/pages/search/search.module').then(m => m.SearchModule) },
  { path: 'currency', loadChildren: () => import('./modules/features/pages/currency/currency.module').then(m => m.CurrencyModule) },
  { path: 'settings', loadChildren: () => import('./modules/features/pages/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'edit-profile', loadChildren: () => import('./modules/features/pages/edit-profile/edit-profile.module').then(m => m.EditProfileModule) },
  { path: 'reviews', loadChildren: () => import('./modules/features/pages/reviews/reviews.module').then(m => m.ReviewsModule) },
  { path: 'card-selection', loadChildren: () => import('./modules/features/pages/card-selection/card-selection.module').then(m => m.CardSelectionModule) },
  { path: 'booking-confirmation', loadChildren: () => import('./modules/features/pages/booking-confirmation/booking-confirmation.module').then(m => m.BookingConfirmationModule) },
  { path: 'purchase', loadChildren: () => import('./modules/features/pages/purchase/purchase.module').then(m => m.PurchaseModule) },
  { path: 'settings-language', loadChildren: () => import('./modules/features/pages/settings-language/settings-language.module').then(m => m.SettingsLanguageModule) }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {  relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

