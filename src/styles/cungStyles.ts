export const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    minHeight: "150px",
    padding: "8px",
    position: "relative" as const
  },
  napAmContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
    marginBottom: "8px",
    alignItems: "flex-start"
  },
  napAm: {
    fontSize: "50%"
  },
  cungChuc: {
    position: "absolute" as const,
    top: "0%",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "100%",
    color: "black",
    padding: "4px"
  },
  chinhTinh: {
    position: "absolute" as const,
    top: "12%",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    fontSize: "140%"
  },
  trangSinh: {
    position: "absolute" as const,
    bottom: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    fontSize: "70%",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "2px"
  },
  rightStars: {
    position: "absolute" as const,
    top: "40%",
    right: "0%",
    fontSize: "75%",
    padding: "4px"
  },
  middleStars: {
    position: "absolute" as const,
    bottom: "15%",
    right: "50%",
    fontSize: "75%",
    padding: "4px"
  },
  leftStars: {
    position: "absolute" as const,
    top: "60%",
    right: "80%",
    fontSize: "75%",
    padding: "4px"
  },
  star: {
    whiteSpace: "nowrap" as const,
    fontSize: "90%"
  }
};
