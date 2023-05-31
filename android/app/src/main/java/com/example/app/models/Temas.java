package com.example.app.models;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Temas {
  @SerializedName("idTema")
  @Expose
  private Integer idTema;
  @SerializedName("tema")
  @Expose
  private String tema;
  @SerializedName("idJuegos")
  @Expose
  private Integer idJuegos;

  public Integer getIdTema() {
    return idTema;
  }

  public void setIdTema(Integer idTema) {
    this.idTema = idTema;
  }

  public String getTema() {
    return tema;
  }

  public void setTema(String tema) {
    this.tema = tema;
  }

  public Integer getIdJuegos() {
    return idJuegos;
  }

  public void setIdJuegos(Integer idJuegos) {
    this.idJuegos = idJuegos;
  }
}
