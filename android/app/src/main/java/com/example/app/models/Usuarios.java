package com.example.app.models;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Usuarios {
  @SerializedName("idUsuario")
  @Expose
  private Integer idUsuario;
  @SerializedName("email")
  @Expose
  private String email;
  @SerializedName("usuario")
  @Expose
  private String usuario;
  @SerializedName("contra")
  @Expose
  private String contra;

  public Integer getIdUsuario() {
    return idUsuario;
  }

  public void setIdUsuario(Integer idUsuario) {
    this.idUsuario = idUsuario;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getUsuario() {
    return usuario;
  }

  public void setUsuario(String usuario) {
    this.usuario = usuario;
  }

  public String getContra() {
    return contra;
  }

  public void setContra(String contra) {
    this.contra = contra;
  }
}
