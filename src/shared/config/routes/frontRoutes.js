import { roles } from '../roles'
export const frontRoutes = {
  pages: {
    // НазваСторінки: {
    //   path: 'шлях_у_роутері',
    //   navigationPath: 'шлях_для_програмної_навігації',
    //   meta: {
    //     title: 'заголовок_сторінки',
    //     isInMenu: чи треба у головному мені відповідний пункт,
    //     requireAuth: чи потребує авторизації,
    //     roles: [перелік ролей користувачів, які мають доступ],
    //   },
    // },
    HomePage: {
      path: "",
      navigationPath: "/",
      meta: {
        title: "home.menuLabel",
        isInMenu: true,
        requireAuth: false,
      },
    },
    LoginPage: {
      path: "login",
      navigationPath: "/login",
      meta: {
        title: "login.title",
        isInMenu: false,
        requireAuth: false,
      },
    },
    UsersPage: {
      path: "users",
      navigationPath: "/users",
      meta: {
        title: "users.menuLabel",
        isInMenu: true,
        requireAuth: true,
        roles: [roles.admin],
      },
    },
    UserEditPage: {
      path: "users/edit/:id",
      navigationPath: (id) => `/users/edit/${id ?? ""}`,
      meta: {
        title: "userEdit.title",
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin],
      },
    },
    ProductsPage: {
      path: "products",
      navigationPath: "/products",
      meta: {
        title: "products.menuLabel",
        isInMenu: true,
        requireAuth: false,
      },
    },
    ProductEditPage: {
      path: "products/edit/:id?",
      navigationPath: (id) => `/products/edit/${id ?? ""}`,
      meta: {
        title: "editProduct.title",
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin, roles.manager],
      },
    },
    ProductAddPage: {
      path: "products/add",
      navigationPath: "/products/add",
      meta: {
        title: "addProduct.title",
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin, roles.manager],
      },
    },
    FavoritesPage: {
      path: "favorites",
      navigationPath: "/favorites",
      meta: {
        title: "favorites.menuLabel",
        isInMenu: true,
        requireAuth: true,
        roles: [roles.user],
      },
    },
    CartPage: {
      path: "cart",
      navigationPath: "/cart",
      meta: {
        title: "cart.title",
        isInMenu: true,
        requireAuth: true,
        roles: [roles.user],
      },
    },
    NotFoundPage: {
      path: "*",
      meta: {
        title: "notFound.title",
        isInMenu: false,
        requireAuth: false,
      },
    },
    ForbiddenPage: {
      path: "forbidden",
      navigationPath: "/forbidden",
      meta: {
        title: "forbidden.title",
        isInMenu: false,
        requireAuth: false,
      },
    },
  },
};

export function getPagesObjectList() {
  const pagesList = Object.keys(frontRoutes.pages)
  return pagesList.map((page) => frontRoutes.pages[page])
}
