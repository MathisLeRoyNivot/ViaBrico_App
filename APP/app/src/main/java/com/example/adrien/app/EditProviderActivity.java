package com.example.adrien.app;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.Window;
import android.widget.EditText;
import android.widget.Toast;

import com.loopj.android.http.AsyncHttpClient;
import com.loopj.android.http.AsyncHttpResponseHandler;
import com.loopj.android.http.RequestParams;

public class EditProviderActivity extends Activity {

    private EditText p_name;
    private EditText p_email;
    private EditText p_phone;
    private EditText p_address;
    private EditText p_description;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_edit_provider);

        //Catch Ids
        p_name = findViewById(R.id.name_input);
        p_email = findViewById(R.id.email_input);
        p_phone = findViewById(R.id.phone_input);
        p_address = findViewById(R.id.address_input);
        p_description = findViewById(R.id.description_input);


        //Get Intent parameters
        String name = getIntent().getStringExtra("providerName");
        String email = getIntent().getStringExtra("providerEmail");
        String phone = getIntent().getStringExtra("providerPhone");
        String address = getIntent().getStringExtra("providerAddress");
        String description = getIntent().getStringExtra("providerDescription");

        //Set values in Inputs
        p_name.setText(name);
        p_email.setText(email);
        p_phone.setText(phone);
        p_address.setText(address);
        p_description.setText(description);
    }

    public static boolean isConnected(Context context) {
        //Get Manager
        ConnectivityManager connectivityManager =
                (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);

        //Get Connection state
        NetworkInfo networkInfo = connectivityManager.getActiveNetworkInfo();
        if (networkInfo != null) {
            return networkInfo.isConnected();
        }
        return false;
    }

    public void updateProvider(View view) {

        //Retrieve data from inputs
        String name = p_name.getText().toString();
        String email = p_email.getText().toString();
        String phone = p_phone.getText().toString();
        String address = p_address.getText().toString();
        String description = p_description.getText().toString();


        if (name.length() > 0 && email.length() > 0 && phone.length() > 0 && address.length() > 0 && description.length() > 0) {

            if (isConnected(EditProviderActivity.this)) {

                //Http Client
                AsyncHttpClient client = new AsyncHttpClient();

                //Parameters
                RequestParams requestParams = new RequestParams();
                requestParams.put("name", name);
                requestParams.put("description", description);
                requestParams.put("address", address);
                requestParams.put("phone_number", phone);
                requestParams.put("email", email);

                Log.i("name", name);
                Log.i("email", email);
                Log.i("phone", phone);
                Log.i("address", address);
                Log.i("description", description);


                //Call
                client.put("https://viabrico-api.herokuapp.com/providers/".concat(name), requestParams, new AsyncHttpResponseHandler() {
                    @Override
                    public void onSuccess(int statusCode, cz.msebera.android.httpclient.Header[] headers, byte[] responseBody) {
                        Log.i("Success", "Provider Successfully modified");

                        Toast.makeText(EditProviderActivity.this, "Fournisseur modifié !", Toast.LENGTH_SHORT).show();

                        //Redirect to Providers List
                        Intent intent = new Intent(getApplicationContext(), ListActivity.class);
                        startActivity(intent);
                        finish();
                    }

                    @Override
                    public void onFailure(int statusCode, cz.msebera.android.httpclient.Header[] headers, byte[] responseBody, Throwable error) {
                        Log.e("Error", error.toString());
                    }
                });

            }
            else {
                Log.e("Error", "Device not connected to network");
            }

        }
        else {
            Toast.makeText(this, "Tous les champs doivent être remplis", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void finish()
    {
        super.finish();
        overridePendingTransition(R.anim.page_slide_horizontal_out,
                R.anim.page_slide_horizontal_back);
    }
}
