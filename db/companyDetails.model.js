
module.exports = (sequelize, Sequelize) => {

    const companyDetails = sequelize.define("companyDetails", {
        name: {
        type: Sequelize.STRING
        },
        purpose: {
        type: Sequelize.STRING
        },
    },
    { 
        timestamps: false,
    });
    console.log("sequlize define", companyDetails);
    return companyDetails;
    
};