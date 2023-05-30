package com.example.app;

import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.app.models.Temas;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.plugin.WebView;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends BridgeActivity {

  private ApiService apiService;
  private TableAdapter tableAdapter;

  private ArrayList<Temas> listaTemas;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    apiService = new ApiService();
    listaTemas = new ArrayList<Temas>();

    // Obtener referencia a la tabla en tu diseño
//    RecyclerView recyclerView = findViewById(R.id.webview);
//
//    // Configurar el layout manager y el adaptador
//    recyclerView.setLayoutManager(new LinearLayoutManager(this));
//    tableAdapter = new TableAdapter(this, listaTemas);
//    recyclerView.setAdapter(tableAdapter);

    // Obtener los datos de la API REST y actualizar el adaptador
    apiService.getTemas(new Callback<List<Temas>>() {
      @Override
      public void onResponse(Call<List<Temas>> call, Response<List<Temas>> response) {
        if (response.isSuccessful()) {
          List<Temas> datos = response.body();
          tableAdapter.setDatos(datos);
        } else {
          // Manejar respuesta no exitosa
        }
      }

      @Override
      public void onFailure(Call<List<Temas>> call, Throwable t) {
        // Manejar error de comunicación
      }
    });
  }
}
