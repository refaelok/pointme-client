package com.iClimb_client;

import com.facebook.react.ReactActivity;
import com.smixx.reactnativeicons.ReactNativeIcons;  // <--- import
import java.util.Arrays; // <--- import this if you want to specify which fonts to load
import com.smixx.reactnativeicons.IconFont; // <--- import this if you want to specify which fonts to load

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "iClimb_client";
    }


      @Override
      protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mReactRootView = new ReactRootView(this);

        mReactInstanceManager = ReactInstanceManager.builder()
          .setApplication(getApplication())
          .setBundleAssetName("index.android.bundle")
          .setJSMainModuleName("index.android")
          .addPackage(new MainReactPackage())
          .addPackage(new ReactNativeIcons())              // <------ add here
          .setUseDeveloperSupport(BuildConfig.DEBUG)
          .setInitialLifecycleState(LifecycleState.RESUMED)
          .build();

        mReactRootView.startReactApplication(mReactInstanceManager, "example", null);

        setContentView(mReactRootView);
      }
}
