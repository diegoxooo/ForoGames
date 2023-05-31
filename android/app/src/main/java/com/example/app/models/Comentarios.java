package com.example.app.models;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Comentarios {
  @SerializedName("idComent")
  @Expose
  private Integer idComent;
  @SerializedName("comentario")
  @Expose
  private String comentario;
  @SerializedName("idTema")
  @Expose
  private Integer idTema;
  @SerializedName("idUsuario")
  @Expose
  private Integer idUsuario;

  public Integer getIdComent() {
    return idComent;
  }

  public void setIdComent(Integer idComent) {
    this.idComent = idComent;
  }

  public String getComentario() {
    return comentario;
  }

  public void setComentario(String comentario) {
    this.comentario = comentario;
  }

  public Integer getIdTema() {
    return idTema;
  }

  public void setIdTema(Integer idTema) {
    this.idTema = idTema;
  }

  public Integer getIdUsuario() {
    return idUsuario;
  }

  public void setIdUsuario(Integer idUsuario) {
    this.idUsuario = idUsuario;
  }
}
