import dots from "../../logos and images/dots.svg";

export function getPages(page, totalPageCount) {
    if (totalPageCount <= 5) {
      return Array.from({ length: totalPageCount }, (_, index) => index + 1);
    }
    if (page <= 5) {
      return [1, 2, 3, 4, 5, 6, dots, totalPageCount];
    }
    if (page >= totalPageCount - 5) {
      return [
        1,
        dots,
        totalPageCount - 5,
        totalPageCount - 4,
        totalPageCount - 3,
        totalPageCount - 2,
        totalPageCount - 1,
        totalPageCount,
      ];
    }
    return [
      1,
      dots,
      page - 3,
      page - 2,
      page - 1,
      page,
      page + 1,
      page + 2,
      dots,
      totalPageCount,
    ];
  }