package com.example.adrien.app;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import java.lang.reflect.Array;

public class Provider {

    private String name;
    private String email;
    private String phone;
    private String address;
    private String description;

    public Provider() {
    }

    public Provider(String name, String email, String phone, String address, String description) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.description = description;
    }


}
