package com.example.adrien.app;

import android.app.Activity;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Window;

public class AddProviderActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_add_fournisseur);
    }

    @Override
    public void finish()
    {
        super.finish();
        overridePendingTransition(R.anim.page_slide_horizontal_out,
                R.anim.page_slide_horizontal_back);
    }
}
