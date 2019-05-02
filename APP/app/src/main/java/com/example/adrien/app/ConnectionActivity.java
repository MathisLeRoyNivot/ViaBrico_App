package com.example.adrien.app;

import android.app.Activity;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.widget.Button;
import android.widget.EditText;

public class ConnectionActivity extends Activity {

    private Button connectButton;
    private EditText emailField;
    private EditText passwordField;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_connection);

        //Catch Ids
        connectButton = findViewById(R.id.connectButton);
        emailField = findViewById(R.id.emailInput);
        passwordField = findViewById(R.id.passwordInput);

        //Onclick Listener on Button
        connectButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                //Retrieve Username and password
                String username = emailField.getText().toString();
                String password = passwordField.getText().toString();

                //Check credentials


                Intent intent = new Intent(getApplicationContext(), ListActivity.class);
                startActivity(intent);
                overridePendingTransition(R.anim.page_slide_horizontal_in,
                        R.anim.page_slide_horizontal_out);
            }
        });


    }
}
