import activeWorks from "@src/api/endpoints/activeWorks";
import detailCraft from "@src/api/endpoints/detailCraft";
import details from "@src/api/endpoints/details";
import items from "@src/api/endpoints/items";
import machines from "@src/api/endpoints/machines";
import packstations from "@src/api/endpoints/packstations";
import requests from "@src/api/endpoints/requests";
import users from "@src/api/endpoints/users";

const Api = {
  users,
  detailCraft,
  items,
  details,
  activeWorks,
  packstations,
  machines,
  requests,
};

export default Api;
