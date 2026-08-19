import Filter from "../Filter/Filter";

const data = [{title: "Изученные"}, {title: "Не изученные"}, {title: "Все"}]

const Status = () => {
  return <Filter title="Статус" data={data} />;
};

export default Status;
