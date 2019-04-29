package com.example.adrien.app;

import android.app.Activity;
import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.preference.PreferenceActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.Window;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.loopj.android.http.AsyncHttpClient;
import com.loopj.android.http.AsyncHttpResponseHandler;
import com.loopj.android.http.RequestParams;

import java.util.ArrayList;
import java.util.List;

public class ListActivity extends Activity {

    private RecyclerView recyclerView;
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

            //Parameters
            RequestParams requestParams = new RequestParams();

            //Call
            client.get("http://s519716619.onlinehome.fr/exchange/madrental/get-vehicules.php", requestParams, new AsyncHttpResponseHandler() {
                @Override
                public void onSuccess(int statusCode, PreferenceActivity.Header[] headers,
                                      byte[] response) {
                    String providers = new String(response);
                    try {
                        //Put Webservice return in local variable
                        calledJSON = new JSONArray(providers);


                        //Iterate on JSONArray to create differents providers
                        for (int i = 0; i < calledJSON.length(); i++) {
                            try {
                                forJsonObject = calledJSON.getJSONObject(i);
                                /*
                                Integer vID = Integer.parseInt(forJsonObject.getString("id"));
                                String vName = forJsonObject.getString("nom");
                                String vImage = forJsonObject.getString("image");
                                Integer vAvailable = Integer.parseInt(forJsonObject.getString("disponible"));
                                Integer vBaseDailyPrice = Integer.parseInt(forJsonObject.getString("prixjournalierbase"));
                                Integer vSale = Integer.parseInt(forJsonObject.getString("promotion"));
                                Integer vAgeMin = Integer.parseInt(forJsonObject.getString("agemin"));
                                String vCO2Category = forJsonObject.getString("categorieco2");
                                JSONArray vEquipments = forJsonObject.getJSONArray("equipements");
                                JSONArray vOptions = forJsonObject.getJSONArray("options");
                                */


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
                public void onFailure(int statusCode, PreferenceActivity.Header[] headers,
                                      byte[] errorResponse, Throwable e) {
                    Log.e("Error", e.toString());
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
