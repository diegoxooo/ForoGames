package com.example.app;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;

import androidx.recyclerview.widget.RecyclerView;

import com.example.app.models.Temas;

import java.util.ArrayList;
import java.util.List;

public class TableAdapter extends RecyclerView.Adapter<TableAdapter.UsuarioViewHolder> {
  private Context context;
  private ArrayList<Temas> listaTemas;

  public TableAdapter(Context context, ArrayList<Temas> listaTemas){
    this.context = context;
    this.listaTemas = listaTemas;
  }

  public void setDatos(List<Temas> datos) {

  }

  public class UsuarioViewHolder extends RecyclerView.ViewHolder{
    public UsuarioViewHolder(View itemView){
      super(itemView);
    }
  }

  @Override
  public UsuarioViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
    View itemView = View.inflate(context, R.layout.activity_main, parent);
    return new UsuarioViewHolder(itemView);
  }

  @Override
  public void onBindViewHolder(UsuarioViewHolder holder, int position) {
    // Bind data to your views here
  }

  @Override
  public int getItemCount() {
    return listaTemas.size();
  }
}
