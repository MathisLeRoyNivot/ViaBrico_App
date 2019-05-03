package com.example.adrien.app;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.support.constraint.ConstraintLayout;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.loopj.android.http.AsyncHttpClient;
import com.loopj.android.http.AsyncHttpResponseHandler;
import com.loopj.android.http.RequestParams;

import java.util.List;

public class ProviderAdapter extends RecyclerView.Adapter<ProviderAdapter.ProviderViewHolder>
{
    //Define list of items
    private List<Provider> providerList;
    private Activity activity;

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

    //Constructor
    public ProviderAdapter(Activity activity, List<Provider> providerList)
    {
        this.activity = activity;
        this.providerList = providerList;
    }


    public class ProviderViewHolder extends RecyclerView.ViewHolder
    {
        //Initialize variables
        public TextView provider_name;
        public TextView provider_email;
        public TextView provider_phone;
        public TextView provider_address;
        public TextView provider_description;
        public ConstraintLayout provider_wrapper;
        public ImageButton provider_edit;
        public ImageButton provider_delete;


        //Constructor
        public ProviderViewHolder(final View itemView)
        {
            super(itemView);

            //Catch ID
            provider_name = itemView.findViewById(R.id.provider_name);
            provider_email = itemView.findViewById(R.id.provider_email);
            provider_phone = itemView.findViewById(R.id.provider_phone);
            provider_address = itemView.findViewById(R.id.provider_address);
            provider_description = itemView.findViewById(R.id.provider_description);
            provider_wrapper = itemView.findViewById(R.id.provider_wrapper);
            provider_edit = itemView.findViewById(R.id.provider_edit);
            provider_delete = itemView.findViewById(R.id.provider_delete);

            // listener :
            provider_edit.setOnClickListener(new View.OnClickListener()
            {
                @Override
                public void onClick(View view)
                {

                    Intent intent = new Intent(itemView.getContext(), EditProviderActivity.class);
                    intent.putExtra("providerName", providerList.get(getAdapterPosition()).getName());
                    intent.putExtra("providerEmail", providerList.get(getAdapterPosition()).getEmail());
                    intent.putExtra("providerPhone", providerList.get(getAdapterPosition()).getPhone());
                    intent.putExtra("providerAddress", providerList.get(getAdapterPosition()).getAddress());
                    intent.putExtra("providerDescription", providerList.get(getAdapterPosition()).getDescription());
                    itemView.getContext().startActivity(intent);
                    activity.overridePendingTransition(R.anim.page_slide_horizontal_in,
                            R.anim.page_slide_horizontal_out);

                }
            });

            provider_delete.setOnClickListener(new View.OnClickListener()
            {
                @Override
                public void onClick(View view)
                {

                    if (isConnected(itemView.getContext())) {

                        //Http Client
                        AsyncHttpClient client = new AsyncHttpClient();
                        client.setConnectTimeout(20000);
                        client.setMaxRetriesAndTimeout(10, 20000);
                        client.setResponseTimeout(20000);

                        //Parameters
                        RequestParams requestParams = new RequestParams();

                        //Call
                        client.delete("https://viabrico-api.herokuapp.com/providers/" + providerList.get(getAdapterPosition()).getName(), requestParams, new AsyncHttpResponseHandler() {
                            @Override
                            public void onSuccess(int statusCode, cz.msebera.android.httpclient.Header[] headers, byte[] responseBody) {
                                Log.i("Success", "Provider Successfully deleted");

                                Toast.makeText(itemView.getContext(), "Fournisseur supprimé !", Toast.LENGTH_SHORT).show();

                                //Refresh Activity
                                providerList.remove(getAdapterPosition());
                                notifyDataSetChanged();

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
            });
        }
    }

    @Override
    public ProviderViewHolder onCreateViewHolder(ViewGroup parent, int viewType)
    {
        View viewSearch = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.list_row_item, parent, false);
        return new ProviderViewHolder(viewSearch);
    }

    @Override
    public void onBindViewHolder(ProviderViewHolder holder, int position)
    {
        //Catch values
        holder.provider_name.setText(providerList.get(position).getName());
        holder.provider_email.setText(providerList.get(position).getEmail());
        holder.provider_phone.setText(providerList.get(position).getPhone());
        holder.provider_address.setText(providerList.get(position).getAddress());
        holder.provider_description.setText(providerList.get(position).getDescription());

    }

    @Override
    public int getItemCount()
    {
        return providerList.size();
    }
}