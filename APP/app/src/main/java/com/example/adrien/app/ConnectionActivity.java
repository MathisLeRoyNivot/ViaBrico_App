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
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.loopj.android.http.AsyncHttpClient;
import com.loopj.android.http.AsyncHttpResponseHandler;
import com.loopj.android.http.RequestParams;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class ConnectionActivity extends Activity {

    private Button connectButton;
    private EditText emailField;
    private EditText passwordField;
    private JSONObject responseJSON;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_connection);

        //Catch Ids
        connectButton = findViewById(R.id.connectButton);
        emailField = findViewById(R.id.emailInput);
        passwordField = findViewById(R.id.passwordInput);


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

    public void checkUser(View view) throws NoSuchAlgorithmException {

        //Retrieve data from inputs
        String login = emailField.getText().toString();
        String password = passwordField.getText().toString();

        //Hash Password
        MessageDigest md = MessageDigest.getInstance("SHA-256");

        // Change this to UTF-16 if needed
        md.update(password.getBytes(StandardCharsets.UTF_8));
        byte[] digest = md.digest();

        String hashedPassword = String.format("%064x", new BigInteger(1, digest));


        if (login.length() > 0 && password.length() > 0) {

            if (isConnected(ConnectionActivity.this)) {

                //Http Client
                AsyncHttpClient client = new AsyncHttpClient();
                client.setConnectTimeout(20000);
                client.setMaxRetriesAndTimeout(10, 20000);
                client.setResponseTimeout(20000);

                //Parameters
                final RequestParams requestParams = new RequestParams();
                requestParams.put("login", login);
                requestParams.put("password", hashedPassword);

                //Call
                client.post("https://viabrico-api.herokuapp.com/users", requestParams, new AsyncHttpResponseHandler() {
                    @Override
                    public void onSuccess(int statusCode, cz.msebera.android.httpclient.Header[] headers, byte[] responseBody) {

                        //Retrieve response into JSON
                        String response = new String(responseBody);
                        try {
                            responseJSON = new JSONObject(response);

                            if (responseJSON.has("login") && responseJSON.has("password")) {
                                Toast.makeText(ConnectionActivity.this, "Vous êtes connectés !", Toast.LENGTH_SHORT).show();

                                //Redirect to Providers List
                                Intent intent = new Intent(getApplicationContext(), ListActivity.class);
                                startActivity(intent);
                                overridePendingTransition(R.anim.page_slide_horizontal_in,
                                        R.anim.page_slide_horizontal_out);
                            }
                            else {
                                Toast.makeText(ConnectionActivity.this, "Identifiant/Mot de passe Incorrect !", Toast.LENGTH_SHORT).show();
                            }
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
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
}
