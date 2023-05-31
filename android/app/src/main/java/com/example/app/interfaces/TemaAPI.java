package com.example.app.interfaces;

import com.example.app.models.Temas;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface TemaAPI {
  @GET("/")
  Call<List<Temas>> getTemas();

  @POST("/tema/{idUsuario}")
  @FormUrlEncoded
  Call<POST> insertaTema(@Field("tema") String tema,
                      @Field("idJuegos") Integer idJuegos);
}
