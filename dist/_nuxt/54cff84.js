(window.webpackJsonp = window.webpackJsonp || []).push([
  [20, 5, 6, 9],
  {
    296: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {},
        l = n(48),
        component = Object(l.a)(
          r,
          function () {
            return (0, this._self._c)(
              "button",
              {
                staticClass:
                  "border-2 border-white text-white font-bold hover:scale-105 rounded py-1.5 px-2 btn",
              },
              [this._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    297: function (t, e, n) {
      t.exports = n.p + "img/logo.84a3963.png";
    },
    298: function (t, e, n) {
      var content = n(301);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(85).default)("37ecf834", content, !0, { sourceMap: !1 });
    },
    299: function (t, e, n) {
      var content = n(305);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(85).default)("1cefd92e", content, !0, { sourceMap: !1 });
    },
    300: function (t, e, n) {
      "use strict";
      n(298);
    },
    301: function (t, e, n) {
      var r = n(84)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        ".logo-img[data-v-2eb06328]{height:2.5rem;width:8rem}.nav-bg[data-v-2eb06328]{background-image:linear-gradient(90deg,#0a44a2,#88b2f7)}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    302: function (t, e, n) {
      "use strict";
      n.r(e);
      n(43);
      var r = [
          function () {
            var t = this._self._c;
            return t("div", [
              t("img", { staticClass: "logo-img", attrs: { src: n(297) } }),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass:
                  "flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0",
              },
              [
                t._v("\n          Subtotal"),
                e("span", { staticClass: "ml-2" }, [t._v("`$40.00 * `")]),
              ]
            );
          },
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass:
                  "flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0",
              },
              [
                t._v("\n          Fix Shipping"),
                e("span", { staticClass: "ml-2" }, [t._v("$10")]),
              ]
            );
          },
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass:
                  "flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0",
              },
              [
                t._v("\n          Total"),
                e("span", { staticClass: "ml-2" }, [t._v("$50.00")]),
              ]
            );
          },
        ],
        l = n(3),
        o =
          (n(22),
          n(136),
          n(44),
          n(296),
          {
            data: function () {
              return { user: "", isOpen: !1, cart: [], modalIsOpen: !1 };
            },
            methods: {
              drawer: function () {
                (this.isOpen = !this.isOpen), console.log(this.isOpen);
              },
              logoutbtn: function () {
                this.$fire.auth.signOut(),
                  (this.user = ""),
                  this.$router.push("/");
              },
              removeItem: function (t) {
                this.cart.splice(t, 1),
                  localStorage.setItem(
                    "cart_storage",
                    JSON.stringify(this.cart)
                  );
              },
            },
            watch: {
              isOpen: {
                immediate: !0,
                handler: function (t) {
                  t
                    ? document.body.style.setProperty("overflow", "hidden")
                    : document.body.style.removeProperty("overflow");
                },
              },
            },
            mounted: function () {
              var t = this;
              return Object(l.a)(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            document.addEventListener("keydown", function (e) {
                              27 == e.keyCode && t.isOpen && (t.isOpen = !1);
                            }),
                            t.$fire.auth.onAuthStateChanged(function (e) {
                              t.user = e;
                            }),
                            (e.next = 4),
                            JSON.parse(localStorage.getItem("cart_storage"))
                          );
                        case 4:
                          (t.cart = e.sent),
                            localStorage.setItem(
                              "cart_storage",
                              JSON.stringify(t.cart)
                            );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          }),
        c = (n(300), n(48)),
        component = Object(c.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", [
              e(
                "nav",
                { staticClass: "fixed z-40 w-full h-16 px-5 py-3 nav-bg" },
                [
                  e(
                    "div",
                    { staticClass: "w-11/12 mx-auto" },
                    [
                      e(
                        "div",
                        {
                          staticClass:
                            "flex justify-between w-full align-middle",
                        },
                        [
                          e(
                            "div",
                            [
                              e("nuxt-link", { attrs: { to: "/" } }, [
                                e("img", {
                                  staticClass: "logo-img",
                                  attrs: { src: n(297) },
                                }),
                              ]),
                            ],
                            1
                          ),
                          t._v(" "),
                          e("div", { staticClass: "hidden md:block" }, [
                            e(
                              "ul",
                              {
                                staticClass:
                                  "flex justify-center pt-2 space-x-8 text-white uppercase align-center text-md",
                              },
                              [
                                e(
                                  "li",
                                  [
                                    e(
                                      "nuxt-link",
                                      {
                                        staticClass:
                                          "inline-block hover:scale-110",
                                        attrs: { to: "/" },
                                      },
                                      [t._v("Home")]
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "li",
                                  [
                                    e(
                                      "nuxt-link",
                                      {
                                        staticClass:
                                          "inline-block hover:scale-110",
                                        attrs: { to: "/aboutUs" },
                                      },
                                      [t._v("About ")]
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "li",
                                  [
                                    e(
                                      "nuxt-link",
                                      {
                                        staticClass:
                                          "inline-block hover:scale-110",
                                        attrs: { to: "/medicines" },
                                      },
                                      [t._v("Medicines")]
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "li",
                                  [
                                    e(
                                      "nuxt-link",
                                      {
                                        staticClass:
                                          "inline-block hover:scale-110",
                                        attrs: { to: "/contactUs" },
                                      },
                                      [t._v("Contact ")]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "flex gap-3" }, [
                            e("div", { staticClass: "relative" }, [
                              e(
                                "button",
                                {
                                  on: {
                                    click: function (e) {
                                      t.modalIsOpen = !0;
                                    },
                                  },
                                },
                                [
                                  e(
                                    "svg",
                                    {
                                      staticClass: "cursor-pointer h-9 w-9",
                                      attrs: {
                                        viewBox: "0 0 32 32",
                                        id: "svg5",
                                        version: "1.1",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "xmlns:svg":
                                          "http://www.w3.org/2000/svg",
                                        fill: "#ffffff",
                                      },
                                    },
                                    [
                                      e("g", {
                                        attrs: {
                                          id: "SVGRepo_bgCarrier",
                                          "stroke-width": "0",
                                        },
                                      }),
                                      t._v(" "),
                                      e("g", {
                                        attrs: {
                                          id: "SVGRepo_tracerCarrier",
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                        },
                                      }),
                                      t._v(" "),
                                      e(
                                        "g",
                                        {
                                          attrs: { id: "SVGRepo_iconCarrier" },
                                        },
                                        [
                                          e("defs", { attrs: { id: "defs2" } }),
                                          t._v(" "),
                                          e(
                                            "g",
                                            {
                                              attrs: {
                                                id: "layer1",
                                                transform:
                                                  "translate(-12,-292)",
                                              },
                                            },
                                            [
                                              e("path", {
                                                staticStyle: {
                                                  color: "#ffffff",
                                                  fill: "#ffffff",
                                                  "fill-rule": "evenodd",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  "stroke-miterlimit": "4.1",
                                                  "-inkscape-stroke": "none",
                                                },
                                                attrs: {
                                                  d: "m 21,316.00586 c -1.645008,0 -3,1.35499 -3,3 0,1.64501 1.354992,3 3,3 1.645008,0 3,-1.35499 3,-3 0,-1.64501 -1.354992,-3 -3,-3 z m 0,2 c 0.564129,0 1,0.43587 1,1 0,0.56413 -0.435871,1 -1,1 -0.564129,0 -1,-0.43587 -1,-1 0,-0.56413 0.435871,-1 1,-1 z",
                                                  id: "circle5400",
                                                },
                                              }),
                                              t._v(" "),
                                              e("path", {
                                                staticStyle: {
                                                  color: "#ffffff",
                                                  fill: "#ffffff",
                                                  "fill-rule": "evenodd",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  "stroke-miterlimit": "4.1",
                                                  "-inkscape-stroke": "none",
                                                },
                                                attrs: {
                                                  d: "m 35.999999,316.00586 c -1.645008,0 -3,1.35499 -3,3 0,1.64501 1.354992,3 3,3 1.645008,0 3,-1.35499 3,-3 0,-1.64501 -1.354992,-3 -3,-3 z m 0,2 c 0.564129,0 1,0.43587 1,1 0,0.56413 -0.435871,1 -1,1 -0.564129,0 -1,-0.43587 -1,-1 0,-0.56413 0.435871,-1 1,-1 z",
                                                  id: "circle5402",
                                                },
                                              }),
                                              t._v(" "),
                                              e("path", {
                                                staticStyle: {
                                                  color: "#ffffff",
                                                  fill: "#ffffff",
                                                  "fill-rule": "evenodd",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  "stroke-miterlimit": "4.1",
                                                  "-inkscape-stroke": "none",
                                                },
                                                attrs: {
                                                  d: "m 15,294.00586 c -0.552285,0 -1,0.44772 -1,1 0,0.55228 0.447715,1 1,1 h 1.179688 l 2.65039,13.24219 C 17.759297,309.70823 17,310.77542 17,312.00586 c 0,1.6447 1.355301,3 3,3 h 18.011718 c 0.552285,0 1,-0.44772 1,-1 0,-0.55228 -0.447715,-1 -1,-1 H 20 c -0.571296,0 -1,-0.4287 -1,-1 0,-0.5713 0.428704,-1 1,-1 h 16.011718 3 c 0.492161,2.4e-4 0.911339,-0.35764 0.988281,-0.84375 l 1.730469,-11 c 0.09599,-0.60725 -0.373487,-1.15652 -0.988281,-1.15625 H 18.619141 l -0.638672,-3.19531 C 17.887292,294.34287 17.476874,294.00603 17,294.00586 Z m 4.019531,6 h 20.552734 l -1.416016,9 L 20.820312,309 Z m 3.980469,2 c -0.552285,0 -1,0.44772 -1,1 0,0.55228 0.447715,1 1,1 h 13.011718 c 0.552285,0 1,-0.44772 1,-1 0,-0.55228 -0.447715,-1 -1,-1 z m 2,3 c -0.552285,0 -1,0.44772 -1,1 0,0.55228 0.447715,1 1,1 h 9.011718 c 0.552285,0 1,-0.44772 1,-1 0,-0.55228 -0.447715,-1 -1,-1 z",
                                                  id: "path5404",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e(
                                    "p",
                                    {
                                      staticClass:
                                        "absolute top-0 px-1 text-sm font-bold text-white bg-red-500 rounded-full left-5",
                                    },
                                    [t._v(t._s(t.cart))]
                                  ),
                                ]
                              ),
                            ]),
                            t._v(" "),
                            t.user
                              ? e(
                                  "div",
                                  { staticClass: "hidden md:block" },
                                  [
                                    e("headerbtn", [
                                      e(
                                        "button",
                                        { on: { click: t.logoutbtn } },
                                        [t._v("Sign Out")]
                                      ),
                                    ]),
                                  ],
                                  1
                                )
                              : e(
                                  "div",
                                  { staticClass: "hidden space-x-2 md:block" },
                                  [
                                    e(
                                      "headerbtn",
                                      [
                                        e(
                                          "nuxt-link",
                                          { attrs: { to: "/login" } },
                                          [t._v("Login")]
                                        ),
                                      ],
                                      1
                                    ),
                                    t._v(" "),
                                    e(
                                      "headerbtn",
                                      [
                                        e(
                                          "nuxt-link",
                                          { attrs: { to: "SignUp" } },
                                          [t._v(" Sign Up ")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                            t._v(" "),
                            e("div", { staticClass: "md:hidden" }, [
                              e("button", { on: { click: t.drawer } }, [
                                e(
                                  "svg",
                                  {
                                    staticClass:
                                      "text-white fill-current h-9 w-9",
                                    attrs: {
                                      fill: "none",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                    },
                                  },
                                  [
                                    e("path", {
                                      attrs: { d: "M4 6h16M4 12h16M4 18h16" },
                                    }),
                                  ]
                                ),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "transition",
                        {
                          attrs: {
                            "enter-class": "opacity-0",
                            "enter-active-class": "ease-out transition-medium",
                            "enter-to-class": "opacity-100",
                            "leave-class": "opacity-100",
                            "leave-active-class": "ease-out transition-medium",
                            "leave-to-class": "opacity-0",
                          },
                        },
                        [
                          e(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.isOpen,
                                  expression: "isOpen",
                                },
                              ],
                              staticClass:
                                "fixed inset-0 z-10 transition-opacity",
                              on: {
                                keydown: function (e) {
                                  if (
                                    !e.type.indexOf("key") &&
                                    t._k(e.keyCode, "esc", 27, e.key, [
                                      "Esc",
                                      "Escape",
                                    ])
                                  )
                                    return null;
                                  t.isOpen = !1;
                                },
                              },
                            },
                            [
                              e("div", {
                                staticClass:
                                  "absolute inset-0 bg-black opacity-50",
                                attrs: { tabindex: "0" },
                                on: {
                                  click: function (e) {
                                    t.isOpen = !1;
                                  },
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "aside",
                        {
                          staticClass:
                            "fixed top-0 left-0 z-30 w-full h-screen overflow-auto transition-all duration-300 ease-in-out transform bg-white",
                          class: t.isOpen
                            ? "translate-x-0"
                            : "-translate-x-full",
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass:
                                "flex justify-between px-3 py-2 align-middle nav-bg",
                            },
                            [
                              t._m(0),
                              t._v(" "),
                              e("div", { staticClass: "close" }, [
                                e(
                                  "button",
                                  {
                                    on: {
                                      click: function (e) {
                                        t.isOpen = !1;
                                      },
                                    },
                                  },
                                  [
                                    e(
                                      "svg",
                                      {
                                        staticClass: "w-8 h-8 text-white",
                                        attrs: {
                                          fill: "none",
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                        },
                                      },
                                      [
                                        e("path", {
                                          attrs: { d: "M6 18L18 6M6 6l12 12" },
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "ul",
                            {
                              staticClass:
                                "container flex flex-col justify-center p-5 mx-auto font-bold uppercase divide-y text-md md:text-xl align-center",
                            },
                            [
                              e(
                                "li",
                                [
                                  e(
                                    "nuxt-link",
                                    {
                                      staticClass:
                                        "block my-4 text-center hover:scale-110",
                                      attrs: { to: "/" },
                                      on: {
                                        click: function (e) {
                                          t.isOpen = !1;
                                        },
                                      },
                                    },
                                    [t._v("Home")]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "li",
                                [
                                  e(
                                    "nuxt-link",
                                    {
                                      staticClass:
                                        "block my-4 text-center hover:scale-110",
                                      attrs: { to: "/aboutus" },
                                      on: {
                                        click: function (e) {
                                          t.isOpen = !1;
                                        },
                                      },
                                    },
                                    [t._v("About")]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "li",
                                [
                                  e(
                                    "nuxt-link",
                                    {
                                      staticClass:
                                        "block my-4 text-center hover:scale-110",
                                      attrs: { to: "/medicines" },
                                      on: {
                                        click: function (e) {
                                          t.isOpen = !1;
                                        },
                                      },
                                    },
                                    [t._v("Medicines")]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "li",
                                [
                                  e(
                                    "nuxt-link",
                                    {
                                      staticClass:
                                        "block my-4 text-center hover:scale-110",
                                      attrs: { to: "/contactus" },
                                      on: { click: t.drawer },
                                    },
                                    [t._v("Contact")]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              t.user
                                ? e(
                                    "li",
                                    { staticClass: "flex justify-center" },
                                    [
                                      e(
                                        "button",
                                        {
                                          staticClass:
                                            "inline-block px-3 py-2 my-5 font-semibold text-center text-blue-600 border-2 border-blue-500 rounded cta hover:bg-blue-600 hover:text-white",
                                          on: { click: t.logoutbtn },
                                        },
                                        [
                                          t._v(
                                            "Sign\n              Out\n            "
                                          ),
                                        ]
                                      ),
                                    ]
                                  )
                                : e(
                                    "li",
                                    {
                                      staticClass: "flex justify-center gap-3",
                                    },
                                    [
                                      e(
                                        "nuxt-link",
                                        {
                                          staticClass:
                                            "inline-block px-3 py-2 my-5 font-semibold text-center text-blue-600 border-2 border-blue-500 rounded cta hover:bg-blue-600 hover:text-white",
                                          attrs: { to: "/login" },
                                          on: {
                                            click: function (e) {
                                              t.isOpen = !1;
                                            },
                                          },
                                        },
                                        [t._v("Login")]
                                      ),
                                      t._v(" "),
                                      e(
                                        "nuxt-link",
                                        {
                                          staticClass:
                                            "inline-block px-3 py-2 my-5 font-semibold text-center text-white bg-blue-500 rounded cta hover:bg-blue-600",
                                          attrs: { to: "/signup" },
                                          on: {
                                            click: function (e) {
                                              t.isOpen = !1;
                                            },
                                          },
                                        },
                                        [t._v("Sign\n              Up")]
                                      ),
                                    ],
                                    1
                                  ),
                            ]
                          ),
                          t._v(" "),
                          e("div", { staticClass: "follow" }, [
                            e(
                              "p",
                              {
                                staticClass:
                                  "text-xl italic font-bold text-center sm:text-md",
                              },
                              [t._v("follow us:")]
                            ),
                            t._v(" "),
                            e(
                              "div",
                              {
                                staticClass:
                                  "flex justify-center gap-16 mt-6 align-center",
                              },
                              [
                                e("div", [
                                  e("a", { attrs: { href: "#!" } }, [
                                    e(
                                      "svg",
                                      {
                                        staticClass:
                                          "w-8 h-full mx-auto hover:scale-110",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "currentColor",
                                          viewBox: "0 0 24 24",
                                        },
                                      },
                                      [
                                        e("path", {
                                          attrs: {
                                            d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
                                          },
                                        }),
                                      ]
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", [
                                  e("a", { attrs: { href: "#!" } }, [
                                    e(
                                      "svg",
                                      {
                                        staticClass:
                                          "w-8 h-full mx-auto hover:scale-110",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "currentColor",
                                          viewBox: "0 0 24 24",
                                        },
                                      },
                                      [
                                        e("path", {
                                          attrs: {
                                            d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                                          },
                                        }),
                                      ]
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", [
                                  e("a", { attrs: { href: "#!" } }, [
                                    e(
                                      "svg",
                                      {
                                        staticClass:
                                          "w-8 h-full mx-auto hover:scale-110",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "currentColor",
                                          viewBox: "0 0 24 24",
                                        },
                                      },
                                      [
                                        e("path", {
                                          attrs: {
                                            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                                          },
                                        }),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              ),
              t._v(" "),
              t.modalIsOpen
                ? e(
                    "div",
                    {
                      staticClass:
                        "fixed top-0 right-0 z-40 flex items-end justify-end w-full h-screen mr-auto transition-opacity bg-black bg-opacity-50 sm:block",
                    },
                    [
                      e(
                        "div",
                        {
                          staticClass:
                            "relative w-full h-full ml-auto bg-white rounded-md md:w-3/12 xl:w-5/12",
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass:
                                "flex items-center justify-between p-6",
                            },
                            [
                              e(
                                "h1",
                                {
                                  staticClass:
                                    "text-xl font-bold text-blue-500",
                                },
                                [t._v("Your Bag")]
                              ),
                              t._v(" "),
                              e(
                                "svg",
                                {
                                  staticClass: "w-6 h-6 cursor-pointer",
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    "stroke-width": "1.5",
                                    stroke: "currentColor",
                                  },
                                  on: {
                                    click: function (e) {
                                      t.modalIsOpen = !1;
                                    },
                                  },
                                },
                                [
                                  e("path", {
                                    attrs: {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      d: "M6 18L18 6M6 6l12 12",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "div",
                            { staticClass: "w-[90%] mx-auto mb-3" },
                            [
                              t._l(t.cart, function (n, r) {
                                return e(
                                  "div",
                                  {
                                    key: r,
                                    staticClass:
                                      "flex items-center justify-between pr-3 mb-3 border-2 border-blue-400 rounded-lg",
                                  },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "flex items-center pr-2 space-x-4",
                                      },
                                      [
                                        e("div", { staticClass: "w-36 h-36" }, [
                                          e("img", {
                                            attrs: { src: n.imageUrl },
                                          }),
                                        ]),
                                        t._v(" "),
                                        e("div", [
                                          e(
                                            "h2",
                                            {
                                              staticClass:
                                                "mb-3 font-bold text-md",
                                            },
                                            [t._v(t._s(n.name))]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            { staticClass: "text-black" },
                                            [
                                              t._v(
                                                " PKR " + t._s(n.price) + " .00"
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ]
                                    ),
                                    t._v(" "),
                                    e("div", [
                                      e(
                                        "button",
                                        { on: { click: t.removeItem } },
                                        [
                                          e(
                                            "svg",
                                            {
                                              staticClass: "w-6 h-6",
                                              attrs: {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                              },
                                            },
                                            [
                                              e("path", {
                                                attrs: {
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  "stroke-width": "2",
                                                  d: "M6 18L18 6M6 6l12 12",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              t._v(" "),
                              e("div", { staticClass: "flex p-4 mt-4" }, [
                                e("h2", { staticClass: "text-xl font-bold" }, [
                                  t._v("Total Items in Cart : " + t._s(t.cart)),
                                ]),
                              ]),
                              t._v(" "),
                              t._m(1),
                              t._v(" "),
                              t._m(2),
                              t._v(" "),
                              t._m(3),
                            ],
                            2
                          ),
                        ]
                      ),
                    ]
                  )
                : t._e(),
            ]);
          },
          r,
          !1,
          null,
          "2eb06328",
          null
        );
      e.default = component.exports;
      installComponents(component, { Headerbtn: n(296).default });
    },
    304: function (t, e, n) {
      "use strict";
      n(299);
    },
    305: function (t, e, n) {
      var r = n(84)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        ".logo[data-v-80d62166]{height:2.5rem;width:10rem}.bg-clr[data-v-80d62166]{background-color:rgba(0,0,0,.2)}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    307: function (t, e, n) {
      "use strict";
      n.r(e);
      n(304);
      var r = n(48),
        component = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass:
                  "fixed bottom-0 z-50 w-full mt-auto bg-white border-t-4 border-blue-500 rounded-xl",
              },
              [
                e("footer", { staticClass: "text-center text-gray-800" }, [
                  e("div", { staticClass: "pt-2" }, [
                    t._m(0),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "grid grid-cols-1 md:grid-cols-3 align-center",
                      },
                      [
                        e("div", { staticClass: "hidden md:block" }, [
                          e(
                            "ul",
                            {
                              staticClass:
                                "flex items-center justify-center text-sm text-center md:flex-col sm:mt-2",
                            },
                            [
                              e(
                                "li",
                                { staticClass: "my-2 mt-1 md:mx-3 sm:mb-2" },
                                [
                                  e(
                                    "nuxt-link",
                                    {
                                      staticClass:
                                        "inline-block font-bold md:text-md hover:scale-105 hover:text-blue-500",
                                      attrs: { to: "/" },
                                    },
                                    [t._v("Home")]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "li",
                                { staticClass: "my-2 mt-1 md:mx-3 sm:mb-2" },
                                [
                                  e(
                                    "nuxt-link",
                                    {
                                      staticClass:
                                        "inline-block font-bold md:text-md hover:scale-105 hover:text-blue-500",
                                      attrs: { to: "/aboutus" },
                                    },
                                    [t._v("About")]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "li",
                                { staticClass: "my-2 mt-1 md:mx-3 sm:mb-2" },
                                [
                                  e(
                                    "nuxt-link",
                                    {
                                      staticClass:
                                        "inline-block font-bold md:text-md hover:scale-105 hover:text-blue-500",
                                      attrs: { to: "/medicines" },
                                    },
                                    [t._v("Medicines")]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "li",
                                { staticClass: "my-2 mt-1 md:mx-3 sm:mb-2" },
                                [
                                  e(
                                    "nuxt-link",
                                    {
                                      staticClass:
                                        "inline-block font-bold md:text-md hover:scale-105 hover:text-blue-500",
                                      attrs: { to: "/contactus" },
                                    },
                                    [t._v("Contact\n                Us")]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass:
                              "flex justify-center gap-16 my-6 align-center",
                          },
                          [
                            e("div", [
                              e("a", { attrs: { href: "/" } }, [
                                e(
                                  "svg",
                                  {
                                    staticClass:
                                      "w-6 h-full mx-auto hover:scale-110 hover:text-blue-500",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      viewBox: "0 0 24 24",
                                    },
                                  },
                                  [
                                    e("path", {
                                      attrs: {
                                        d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
                                      },
                                    }),
                                  ]
                                ),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", [
                              e("a", { attrs: { href: "/" } }, [
                                e(
                                  "svg",
                                  {
                                    staticClass:
                                      "w-6 h-full mx-auto hover:scale-110 hover:text-blue-500",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      viewBox: "0 0 24 24",
                                    },
                                  },
                                  [
                                    e("path", {
                                      attrs: {
                                        d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                                      },
                                    }),
                                  ]
                                ),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", [
                              e("a", { attrs: { href: "/" } }, [
                                e(
                                  "svg",
                                  {
                                    staticClass:
                                      "w-6 h-full mx-auto hover:scale-110 hover:text-blue-500",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      viewBox: "0 0 24 24",
                                    },
                                  },
                                  [
                                    e("path", {
                                      attrs: {
                                        d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                                      },
                                    }),
                                  ]
                                ),
                              ]),
                            ]),
                          ]
                        ),
                        t._v(" "),
                        e("div", { staticClass: "sm:mb-4" }, [
                          e(
                            "ul",
                            {
                              staticClass:
                                "flex flex-col justify-center text-sm text-center align-center sm:mt-2",
                            },
                            [
                              e(
                                "li",
                                { staticClass: "my-2 mt-1 md:mx-3 sm:mb-2" },
                                [
                                  e(
                                    "nuxt-link",
                                    {
                                      staticClass:
                                        "inline-block font-bold md:text-md hover:scale-105 hover:text-blue-500",
                                      attrs: { to: "/lab-tests" },
                                    },
                                    [t._v("Lab Tests")]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "li",
                                { staticClass: "my-2 mt-1 md:mx-3 sm:mb-2" },
                                [
                                  e(
                                    "nuxt-link",
                                    {
                                      staticClass:
                                        "inline-block font-bold md:text-md hover:scale-105 hover:text-blue-500",
                                      attrs: { to: "/compounded" },
                                    },
                                    [t._v("Compounded")]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "li",
                                { staticClass: "my-2 mt-1 md:mx-3 sm:mb-2" },
                                [
                                  e(
                                    "nuxt-link",
                                    {
                                      staticClass:
                                        "inline-block font-bold md:text-md hover:scale-105 hover:text-blue-500",
                                      attrs: { to: "/medicines" },
                                    },
                                    [t._v("Medicines")]
                                  ),
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "li",
                                { staticClass: "my-2 mt-1 md:mx-3 sm:mb-2" },
                                [
                                  e(
                                    "nuxt-link",
                                    {
                                      staticClass:
                                        "inline-block font-bold md:text-md hover:scale-105 hover:text-blue-500",
                                      attrs: { to: "/consultation" },
                                    },
                                    [
                                      t._v(
                                        "Doctor\n                Consulatation"
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  t._m(1),
                ]),
              ]
            );
          },
          [
            function () {
              var t = this._self._c;
              return t("div", { staticClass: "hidden px-8 mb-2 md:block" }, [
                t("p", [
                  this._v(
                    "\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt\n          distinctio earum repellat quaerat voluptatibus placeat nam,\n          commodi optio pariatur est quia magnam eum harum corrupti dicta,\n          aliquam sequi voluptate quas.\n        "
                  ),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t._self._c;
              return e(
                "div",
                { staticClass: "p-2 text-center text-white bg-blue-500" },
                [
                  t._v("\n      © 2023 Copyright "),
                  e("strong", [t._v(" | ")]),
                  t._v(" "),
                  e(
                    "a",
                    { staticClass: "hover:underline", attrs: { href: "/" } },
                    [t._v(" 24-7 Pharmacy")]
                  ),
                ]
              );
            },
          ],
          !1,
          null,
          "80d62166",
          null
        );
      e.default = component.exports;
    },
    322: function (t, e, n) {
      var content = n(336);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(85).default)("67671071", content, !0, { sourceMap: !1 });
    },
    335: function (t, e, n) {
      "use strict";
      n(322);
    },
    336: function (t, e, n) {
      var r = n(84)(function (i) {
        return i[1];
      });
      r.push([
        t.i,
        ".chat-window[data-v-145dae2c]{height:500px;overflow-y:auto}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r);
    },
    364: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(3),
        l =
          (n(22),
          n(50),
          {
            data: function () {
              return { messages: [], newMessage: "", user: "" };
            },
            created: function () {
              var t = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var n;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((t.user = t.$fire.auth.currentUser), !t.user)) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (e.next = 4),
                            t.$fire.firestore
                              .collection("users")
                              .doc(t.user.uid)
                          );
                        case 4:
                          return (
                            (n = e.sent),
                            (e.next = 7),
                            n
                              .collection("messages")
                              .orderBy("timestamp", "asc")
                              .onSnapshot(function (e) {
                                t.messages = e.docs.map(function (t) {
                                  return t.data();
                                });
                              })
                          );
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            methods: {
              sendMessage: function () {
                var t = this;
                return Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    var n;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!t.user || "" == t.newMessage) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (n = t.$fire.firestore
                                .collection("users")
                                .doc(t.user.uid)),
                              (e.next = 4),
                              n
                                .collection("messages")
                                .add({
                                  email: t.user.email,
                                  text: t.newMessage,
                                  timestamp: new Date(),
                                })
                            );
                          case 4:
                            t.newMessage = "";
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
            },
          }),
        o = (n(335), n(48)),
        component = Object(o.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                e("navbar"),
                t._v(" "),
                e("div", { staticClass: "pt-24 px-16" }, [
                  e(
                    "div",
                    {
                      staticClass:
                        "relative border-2 border-black mb-4 p-2 container md:w-1/2 m-auto chat-window",
                    },
                    [
                      e(
                        "ul",
                        t._l(t.messages, function (n) {
                          return e("li", { key: n.id, staticClass: "w-2/3" }, [
                            e(
                              "div",
                              {
                                staticClass:
                                  "flex flex-col border border-gray-300 rounded-lg mb-3 position",
                              },
                              [
                                e(
                                  "p",
                                  {
                                    staticClass:
                                      "flex justify-between px-1 text-orange-400 bg-gray-100",
                                  },
                                  [t._v(t._s(n.email) + "\n            ")]
                                ),
                                t._v(" "),
                                e("p", { staticClass: "p-2" }, [
                                  t._v(" " + t._s(n.text)),
                                ]),
                              ]
                            ),
                          ]);
                        }),
                        0
                      ),
                      t._v(" "),
                      e("div", { attrs: { clas: "fixed bottom-0" } }, [
                        t.user
                          ? e(
                              "form",
                              {
                                staticClass: "flex align-center gap-2",
                                on: {
                                  submit: function (e) {
                                    return (
                                      e.preventDefault(),
                                      t.sendMessage.apply(null, arguments)
                                    );
                                  },
                                },
                              },
                              [
                                e("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.newMessage,
                                      expression: "newMessage",
                                    },
                                  ],
                                  staticClass:
                                    "rounded-lg border-2 border-black focus:outline-none my-2 p-1 w-4/5 h-10",
                                  attrs: { type: "text", required: "" },
                                  domProps: { value: t.newMessage },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        (t.newMessage = e.target.value);
                                    },
                                  },
                                }),
                                t._v(" "),
                                e("button", { staticClass: "p-2" }, [
                                  e(
                                    "svg",
                                    {
                                      attrs: {
                                        width: "24px",
                                        height: "28px",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                      },
                                    },
                                    [
                                      e("g", {
                                        attrs: {
                                          id: "SVGRepo_bgCarrier",
                                          "stroke-width": "0",
                                        },
                                      }),
                                      t._v(" "),
                                      e("g", {
                                        attrs: {
                                          id: "SVGRepo_tracerCarrier",
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                        },
                                      }),
                                      t._v(" "),
                                      e(
                                        "g",
                                        {
                                          attrs: { id: "SVGRepo_iconCarrier" },
                                        },
                                        [
                                          e("path", {
                                            attrs: {
                                              opacity: "0.15",
                                              d: "M20 4L3 11L10 14L13 21L20 4Z",
                                              fill: "#000000",
                                            },
                                          }),
                                          t._v(" "),
                                          e("path", {
                                            attrs: {
                                              d: "M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14",
                                              stroke: "#000000",
                                              "stroke-width": "1.5",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                              ]
                            )
                          : t._e(),
                      ]),
                      t._v(" "),
                      t.user
                        ? t._e()
                        : e(
                            "div",
                            { staticClass: "text-red-600 text-center text-lg" },
                            [
                              e("p", [
                                t._v(
                                  "Plese join us with Register or login to chat with us"
                                ),
                              ]),
                              t._v(" "),
                              e(
                                "headerbtn",
                                { staticClass: "mt-4 bg-blue-500" },
                                [
                                  e("nuxt-link", { attrs: { to: "/login" } }, [
                                    t._v("Login"),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                    ]
                  ),
                ]),
                t._v(" "),
                e("thefooter"),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "145dae2c",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        Navbar: n(302).default,
        Headerbtn: n(296).default,
        Thefooter: n(307).default,
      });
    },
  },
]);
