package com.example.app;

import com.example.app.interfaces.TemaAPI;
import com.example.app.models.Temas;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ApiService {
  private static final String BASE_URL = "http://localhost:8080";

  private Retrofit retrofit;

  public ApiService() {
    retrofit = new Retrofit.Builder()
      .baseUrl(BASE_URL)
      .addConverterFactory(GsonConverterFactory.create())
      .build();
  }

  public void getTemas(Callback<List<Temas>> callback){
    TemaAPI temaAPI = retrofit.create(TemaAPI.class);
    Call<List<Temas>> call = temaAPI.getTemas();
    call.enqueue(callback);
  }
}
