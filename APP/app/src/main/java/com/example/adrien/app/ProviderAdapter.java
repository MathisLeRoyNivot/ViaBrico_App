package com.example.adrien.app;

import android.app.Activity;
import android.content.Intent;
import android.support.constraint.ConstraintLayout;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.util.List;

public class ProviderAdapter extends RecyclerView.Adapter<ProviderAdapter.ProviderViewHolder>
{
    //Define list of items
    private List<Provider> providerList;
    private Activity activity;

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

            // listener :
            provider_wrapper.setOnClickListener(new View.OnClickListener()
            {
                @Override
                public void onClick(View view)
                {
                    /*
                    Intent intent = new Intent(itemView.getContext(), BookingState1.class);
                    intent.putExtra("searchId", searchList.get(getAdapterPosition()).id);
                    intent.putExtra("searchName", searchList.get(getAdapterPosition()).name);
                    intent.putExtra("searchImage", searchList.get(getAdapterPosition()).image);
                    intent.putExtra("searchAvailable", searchList.get(getAdapterPosition()).available);
                    intent.putExtra("searchBaseDailyPrice", searchList.get(getAdapterPosition()).baseDailyPrice);
                    intent.putExtra("searchSale", searchList.get(getAdapterPosition()).sale);
                    intent.putExtra("searchAgeMin", searchList.get(getAdapterPosition()).ageMin);
                    intent.putExtra("searchCo2Category", searchList.get(getAdapterPosition()).co2Category);
                    intent.putExtra("searchEquipments",  searchList.get(getAdapterPosition()).equipments.toString());
                    intent.putExtra("searchOptions", searchList.get(getAdapterPosition()).options.toString());
                    intent.putExtra("startDate", searchList.get(getAdapterPosition()).startDate.toString());
                    intent.putExtra("endDate", searchList.get(getAdapterPosition()).endDate.toString());
                    itemView.getContext().startActivity(intent);
                    activity.overridePendingTransition(R.anim.page_slide_horizontal_in,
                            R.anim.page_slide_horizontal_out);
                            */
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