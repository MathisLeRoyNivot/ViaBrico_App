package com.example.adrien.app;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.preference.PreferenceActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.View;
import android.view.Window;
import android.widget.ImageButton;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.loopj.android.http.AsyncHttpClient;
import com.loopj.android.http.AsyncHttpResponseHandler;
import com.loopj.android.http.RequestParams;

import java.util.ArrayList;
import java.util.List;

import cz.msebera.android.httpclient.Header;

public class ListActivity extends Activity {

    private RecyclerView recyclerView;
    private ImageButton button_add;
    private ProviderAdapter providerAdapter = null;
    private JSONArray calledJSON;
    private JSONObject forJsonObject;
    final List<Provider> providerList = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_list);

        //Catch IDs
        recyclerView = findViewById(R.id.recyclerviewid);
        button_add = findViewById(R.id.button_add);

        //OnClick Listener on ImageButton
        button_add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), AddProviderActivity.class);
                startActivity(intent);
                overridePendingTransition(R.anim.page_slide_horizontal_in,
                        R.anim.page_slide_horizontal_out);
            }
        });

        //Better performances
        recyclerView.setHasFixedSize(true);

        //Layout Manager, define how elements are disposed
        LinearLayoutManager layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);

        callJSON();

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

    public void callJSON() {
        //Get JSON from webservice
        if (isConnected(ListActivity.this)) {

            //Http Client
            AsyncHttpClient client = new AsyncHttpClient();
            client.setConnectTimeout(20000);
            client.setMaxRetriesAndTimeout(10, 20000);
            client.setResponseTimeout(20000);


            //Call
            client.get("https://viabrico-api.herokuapp.com/providers", new AsyncHttpResponseHandler() {
                @Override
                public void onSuccess(int statusCode, Header[] headers, byte[] response) {
                    String providers = new String(response);
                    try {
                        //Put Webservice return in local variable
                        calledJSON = new JSONArray(providers);


                        //Iterate on JSONArray to create differents providers
                        for (int i = 0; i < calledJSON.length(); i++) {
                            try {
                                forJsonObject = calledJSON.getJSONObject(i);
                                String p_name = forJsonObject.getString("name");
                                String p_email = forJsonObject.getString("email");
                                String p_phone = forJsonObject.getString("phone_number");
                                String p_address = forJsonObject.getString("address");
                                String p_description = forJsonObject.getString("description");

                                providerList.add(new Provider(p_name, p_email, p_phone, p_address, p_description));


                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                        }

                        //Adapter
                        providerAdapter = new ProviderAdapter(ListActivity.this, providerList);
                        recyclerView.setAdapter(providerAdapter);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }

                @Override
                public void onFailure(int statusCode, Header[] headers, byte[] responseBody, Throwable error) {
                    Log.e("Error", error.toString());
                }

            });

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
