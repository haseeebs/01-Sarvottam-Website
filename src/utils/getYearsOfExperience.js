export const getYearsOfExperience = (startYear = 2010) => {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
};
