// https://www.googleapis.com/books/v1/volumes?q=
// intitle:
// inauthor:

const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
const titleSearch = "intitle:";
const authorSearch = "inauthor:";

/**
 * @description - Searchs Google Books API using the given search terms
 * @param searchTerms - The object passed from the searchtermscontextprovider
 */
export const getBooksBySearch = async (searchTerms) => {
  console.log("Getting Books");
  if (searchTerms.generalTerm.trim() === "") {
    throw new Error("Must search for a word");
  }

  const response = await fetch(`${BASE_URL}${searchTerms.generalTerm}`);
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await response.json();
  if (data.totalItems === 0) {
    throw new Error(
      "No books matching " + searchTerms.generalTerm + " were found"
    );
  }
  console.log(data);
  return data;
};
