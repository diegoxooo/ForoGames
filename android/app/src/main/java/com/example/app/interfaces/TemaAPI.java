package com.example.app.interfaces;

import com.example.app.models.Temas;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface TemaAPI {
  @GET("/")
  Call<List<Temas>> getTemas();
}
