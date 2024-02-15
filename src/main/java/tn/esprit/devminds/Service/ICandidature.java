package tn.esprit.devminds.Service;

import tn.esprit.devminds.Entities.Candidature;

import java.util.List;

public interface ICandidature {
public Candidature addCandidature(Candidature c);
public Candidature updateCandidature(Candidature c);
public List<Candidature> getAllCandidature();
public Candidature getCandidatureById(Long idCandidature);
public void deleteCandidture(long idCandidature);
}
