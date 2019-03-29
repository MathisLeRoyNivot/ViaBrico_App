package com.example.adrien.app;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import java.lang.reflect.Array;

public class Fournisseur {

    private String nom_fournisseur;
    private String email_fournisseur;
    private String telephone_fournisseur;
    private String adresse_fournisseur;
    private String description_fournisseur;

    public Fournisseur() {
    }

    public Fournisseur(String nom_fournisseur, String email_fournisseur, String telephone_fournisseur, String adresse_fournisseur, String description_fournisseur) {
        this.nom_fournisseur = nom_fournisseur;
        this.email_fournisseur = email_fournisseur;
        this.telephone_fournisseur = telephone_fournisseur;
        this.adresse_fournisseur = adresse_fournisseur;
        this.description_fournisseur = description_fournisseur;
    }

    public String getNom_fournisseur() {
        return nom_fournisseur;
    }

    public void setNom_fournisseur(String nom_fournisseur) {
        this.nom_fournisseur = nom_fournisseur;
    }

    public String getEmail_fournisseur() {
        return email_fournisseur;
    }

    public void setEmail_fournisseur(String email_fournisseur) {
        this.email_fournisseur = email_fournisseur;
    }

    public String getTelephone_fournisseur() {
        return telephone_fournisseur;
    }

    public void setTelephone_fournisseur(String telephone_fournisseur) {
        this.telephone_fournisseur = telephone_fournisseur;
    }

    public String getAdresse_fournisseur() {
        return adresse_fournisseur;
    }

    public void setAdresse_fournisseur(String adresse_fournisseur) {
        this.adresse_fournisseur = adresse_fournisseur;
    }

    public String getDescription_fournisseur() {
        return description_fournisseur;
    }

    public void setDescription_fournisseur(String description_fournisseur) {
        this.description_fournisseur = description_fournisseur;
    }
}
