package com.example.jroadhf.bean;

public class MortalityResult {
    private final double oneYearMortality;
    private final double threeYearMortality;

    public MortalityResult(double oneYearMortality, double threeYearMortality) {
        this.oneYearMortality = oneYearMortality;
        this.threeYearMortality = threeYearMortality;
    }

    public double getOneYearMortality() {
        return oneYearMortality;
    }

    public double getThreeYearMortality() {
        return threeYearMortality;
    }
}
