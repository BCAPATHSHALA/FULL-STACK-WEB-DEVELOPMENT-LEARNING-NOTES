// TODO: SEARCHING, FILTERING, and PAGINATION

//? SEARCH (Searching using $regex (based on product name))
//! FILTER (Filterning through category,, rating, or price wise)
//* PAGINATION

class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  } 

  /* ========== STEP:01 SEARCH ========== */
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword, //! samosa
            $options: "i", //! Case insensitive ABC=abc
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  /* ========== STEP:02 FILTER ========== */
  filter() {
    const queryCopy = { ...this.queryStr };

    //* Removing some fields for category
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => delete queryCopy[key]);

    //* Filter for Price and Rating
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  /* ========== STEP:03 PAGINATION ========== */
  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = ApiFeatures;
