import React from 'react';

const Dashboard = () => {
    // Sample data for diabetes prediction metrics
    const predictionMetrics = {
        accuracy: 95,
        sensitivity: 93,
        specificity: 97
    };

    // Sample patient statistics
    const patientStats = {
        totalPatients: 120,
        diabeticPatients: 30,
        nonDiabeticPatients: 90
    };

    // Sample feature importance data
    const featureImportance = {
        features: ['Age', 'BMI', 'Glucose Level', 'Blood Pressure'],
        importance: [0.3, 0.25, 0.2, 0.15]
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Diabetes Prediction Metrics</h2>
            <ul>
                <li>Accuracy: {predictionMetrics.accuracy}%</li>
                <li>Sensitivity: {predictionMetrics.sensitivity}%</li>
                <li>Specificity: {predictionMetrics.specificity}%</li>
            </ul>
            <h2>Patient Statistics</h2>
            <ul>
                <li>Total Patients: {patientStats.totalPatients}</li>
                <li>Diabetic Patients: {patientStats.diabeticPatients}</li>
                <li>Non-Diabetic Patients: {patientStats.nonDiabeticPatients}</li>
            </ul>
            <h2>Feature Importance Chart</h2>
            <ul>
                {featureImportance.features.map((feature, index) => (
                    <li key={index}>{feature}: {featureImportance.importance[index]}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;