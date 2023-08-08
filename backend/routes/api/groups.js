const express = require("express");

const {
  Group,
  Membership,
  GroupImage,
  Venue,
  User,
  Event,
  Attendance,
  EventImage,
} = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const e = require("express");

const router = express.Router();

const validateGroupSignup = [
  check("name")
    .exists({ checkFalsy: true })
    .isLength({ max: 60 })
    .withMessage("Name must be 60 characters or less"),
  check("about")
    .exists({ checkFalsy: true })
    .isLength({ min: 50 })
    .withMessage("About must be 50 characters or more"),
  check("type")
    .exists({ checkFalsy: true })
    .isIn(["In person", "Online"])
    .withMessage("Type must be 'Online' or 'In person'"),
  check("private").isBoolean().withMessage("Private must be a boolean"),
  check("city").exists({ checkFalsy: true }).withMessage("City is required"),
  check("state").exists({ checkFalsy: true }).withMessage("State is required"),
  handleValidationErrors,
];

const validateVenueSignup = [
  check("address")
    .exists({ checkFalsy: true })
    .withMessage("Street address is required"),
  check("city").exists({ checkFalsy: true }).withMessage("City is required"),
  check("state").exists({ checkFalsy: true }).withMessage("State is required"),
  check("lat")
    .exists({ checkFalsy: true })
    .isNumeric()
    .withMessage("Latitude is not valid"),
  check("lng")
    .exists({ checkFalsy: true })
    .isNumeric()
    .withMessage("Longitude is not valid"),
  handleValidationErrors,
];

const validateEventSignup = [
  // NEED TO UNCOMMENT WHEN I HAVE A WAY TO SHOW ALL VENUES
  // check("venueId")
  //   .exists({ checkFalsy: true })
  //   .custom(async (val, { req }) => {
  //     const group = await Group.findByPk(req.params.groupId, {
  //       include: Venue,
  //     });
  //     if (!group) {
  //       throw new Error("Group does not exist for this venue");
  //     }
  //     let flag = false
  //     for (let venue of group.toJSON().Venues) {
  //       if (venue.id === req.body.venueId) {
  //         flag = true
  //       }
  //     }
  //     if (flag === false) {
  //       throw new Error("Venue does not exist");
  //     }
  //     return true;
  //   }),
  check("name")
    .exists({ checkFalsy: true }),
  check("type")
    .exists({ checkFalsy: true })
    .isIn(["In person", "Online"])
    .withMessage("Type must be Online or In person"),
  check("capacity")
    .exists({ checkFalsy: true })
    .isNumeric()
    .withMessage("Capacity must be an integer"),
  check("price")
    .exists({ checkFalsy: true })
    .isNumeric()
    .withMessage("Price is invalid"),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Description is required"),
  check("startDate")
    .exists({ checkFalsy: true })
    .custom((val) => {
      const todayDate = new Date();
      const startDate = new Date(val);
      if (startDate < todayDate) {
        throw new Error("Start date must be in the future");
      }
      return true;
    }),
  check("endDate")
    .exists({ checkFalsy: true })
    .custom((val, { req }) => {
      const endDate = new Date(val);
      const startDate = new Date(req.body.startDate);
      if (endDate < startDate) {
        throw new Error("End date is less than start date");
      }
      return true;
    }),
  handleValidationErrors,
];

router.get("/", async (req, res, next) => {
  const groups = await Group.findAll({
    // include: [
    //   {
    //     model: Membership,
    //   },
    //   {
    //     model: GroupImage,
    //   },
    // ],
  });
  let list = [];

  groups.forEach((group) => {
    list.push(group.toJSON());
  });
  // list.forEach((group) => {
  //   let count = 0;
  //   group.Memberships.forEach((member) => {
  //     count++;
  //     group.numMembers = count;
  //   });
  //   group.GroupImages.forEach((image) => {
  //     if (image.preview === true) {
  //       group.previewImage = image.url;
  //     }
  //   });
  //   if (!group.previewImage) {
  //     group.previewImage = "no preview image";
  //   }
  //   delete group.Memberships;
  //   delete group.GroupImages;
  // });
  return res.json({
    Groups: list,
  });
});

// router.get("/current", async (req, res, next) => {
//   const { user } = req;
//   if (user) {
//     const group = await Membership.findAll({
//       where: {
//         userId: user.id,
//       },
//       include: {
//         model: Group,
//         include: [
//           {
//             model: GroupImage,
//           },
//           {
//             model: Membership,
//           },
//         ],
//       },
//     });
//     const groups = await Group.findAll({
//       where: {
//         organizerId: user.id,
//       },
//       include: [
//         {
//           model: Membership,
//         },
//         {
//           model: GroupImage,
//         },
//       ],
//     });

//     let list = [],
//       list1 = [],
//       result = [];
//     groups.forEach((ele) => {
//       list1.push(ele.toJSON());
//     });
//     list1.forEach((group) => {
//       let count = 0;
//       group.Memberships.forEach((member) => {
//         count++;
//         group.numMembers = count;
//       });
//       group.GroupImages.forEach((image) => {
//         if (image.preview === true) {
//           group.previewImage = image.url;
//         }
//       });
//       if (!group.previewImage) {
//         group.previewImage = "no preview image";
//       }
//       group.numMembers = count;
//       delete group.GroupImages;
//       delete group.Memberships;

//       result.push(group);
//     });

//     group.forEach((ele) => {
//       list.push(ele.toJSON());
//     });
//     list.forEach((group) => {
//       let count = 0;
//       group.Group.Memberships.forEach((member) => {
//         count++;
//         group.Group.numMembers = count;
//       });
//       group.Group.GroupImages.forEach((image) => {
//         if (image.preview === true) {
//           group.Group.previewImage = image.url;
//         }
//       });
//       if (!group.previewImage) {
//         group.Group.previewImage = "no preview image";
//       }
//       delete group.Group.GroupImages;
//       delete group.Group.Memberships;

//       result.push(group.Group);
//     });

//     if (result.length >= 1) {
//       return res.json({
//         Groups: result,
//       });
//     } else {
//       res.status(404);
//       return res.json({
//         message: "No groups exist for this user",
//       });
//     }
//   } else {
//     res.status(401);
//     return res.json({
//       message: "Authentication required",
//     });
//   }
// });

// router.get("/:groupId", async (req, res, next) => {
//   const group = await Group.findByPk(req.params.groupId, {
//     include: [
//       {
//         model: Membership,
//       },
//       {
//         model: GroupImage,
//         attributes: {
//           exclude: ["groupId", "updatedAt", "createdAt"],
//         },
//       },
//       {
//         model: User,
//         attributes: ["id", "firstName", "lastName"],
//         as: "Organizer",
//       },
//       {
//         model: Venue,
//         attributes: {
//           exclude: ["updatedAt", "createdAt"],
//         },
//       },
//     ],
//   });
//   if (!group) {
//     res.status(404);
//     return res.json({
//       message: "Group couldn't be found",
//     });
//   }

//   let list = [];
//   list.push(group.toJSON());

//   list.forEach((item) => {
//     let count = 0;
//     item.Memberships.forEach((member) => {
//       count++;
//       item.numMembers = count;
//     });
//     delete item.Memberships;
//   });

//   return res.json(list[0]);
// });

// router.post("/", validateGroupSignup, async (req, res, next) => {
//   const { user } = req;
//   if (user) {
//     let { name, about, type, private, city, state } = req.body;

//     const group = await Group.create({
//       organizerId: user.id,
//       name,
//       about,
//       type,
//       private,
//       city,
//       state,
//     });

//     const safeGroup = {
//       id: group.id,
//       organizerId: user.id,
//       name: group.name,
//       about: group.about,
//       type: group.type,
//       private: group.private,
//       city: group.city,
//       state: group.state,
//       createdAt: group.createdAt,
//       updatedAt: group.updatedAt,
//     };

//     res.status(201);
//     return res.json(safeGroup);
//   } else {
//     res.status(401);
//     return res.json({
//       message: "Authentication required",
//     });
//   }
// });

// router.post("/:groupId/images", async (req, res, next) => {
//   const { user } = req;
//   if (user) {
//     const group = await Group.findByPk(req.params.groupId);
//     if (!group) {
//       res.status(404);
//       return res.json({
//         message: "Group couldn't be found",
//       });
//     }
//     if (group.toJSON().organizerId === user.id) {
//       let { url, preview } = req.body;
//       let result = {};
//       if (url) {
//         result.url = url;
//       }
//       if (preview && preview == true) {
//         result.preview = preview;
//       } else {
//         preview = false;
//         result.preview = preview;
//       }
//       const group = await Group.findByPk(req.params.groupId);
//       if (group) {
//         let groupId = req.params.groupId;
//         await GroupImage.create({ groupId, url, preview });

//         result.id = group.id;
//         return res.json(result);
//       } else {
//         res.status(404);
//         return res.json({
//           message: "Group couldn't be found",
//         });
//       }
//     } else {
//       res.status(403);
//       return res.json({
//         message: "Forbidden",
//       });
//     }
//   } else {
//     res.status(401);
//     return res.json({
//       message: "Authentication required",
//     });
//   }
// });

// router.put("/:groupId", validateGroupSignup, async (req, res, next) => {
//   const { user } = req;
//   if (user) {
//     const group = await Group.findByPk(req.params.groupId);
//     if (!group) {
//       res.status(404);
//       return res.json({
//         message: "Group couldn't be found",
//       });
//     }
//     if (group.toJSON().organizerId === user.id) {
//       let { name, about, type, private, city, state } = req.body;
//       const group = await Group.findByPk(req.params.groupId);

//       if (!group) {
//         res.status(404);
//         return res.json({
//           message: "Group couldn't be found",
//         });
//       }

//       if (name) {
//         group.name = name;
//       }
//       if (about) {
//         group.about = about;
//       }
//       if (type) {
//         group.type = type;
//       }
//       if (private && private === "true") {
//         group.private = private;
//       } else {
//         private = "false";
//         group.private = private;
//       }
//       if (city) {
//         group.city = city;
//       }
//       if (state) {
//         group.state = state;
//       }

//       await group.save();

//       return res.json(group);
//     } else {
//       res.status(403);
//       return res.json({
//         message: "Forbidden",
//       });
//     }
//   } else {
//     res.status(401);
//     return res.json({
//       message: "Authentication required",
//     });
//   }
// });

// router.delete("/:groupId", async (req, res, next) => {
//   const { user } = req;
//   if (user) {
//     const group = await Group.findByPk(req.params.groupId);
//     if (!group) {
//       res.status(404);
//       return res.json({
//         message: "Group couldn't be found",
//       });
//     }
//     if (group.toJSON().organizerId === user.id) {
//       const group = await Group.findByPk(req.params.groupId);
//       if (!group) {
//         res.status(404);
//         return res.json({
//           message: "Group couldn't be found",
//         });
//       }

//       await group.destroy();
//       return res.json({
//         message: "Successfully deleted",
//       });
//     } else {
//       res.status(403);
//       return res.json({
//         message: "Forbidden",
//       });
//     }
//   } else {
//     res.status(401);
//     return res.json({
//       message: "Authentication required",
//     });
//   }
// });

// router.get("/:groupId/venues", async (req, res, next) => {
//   const { user } = req;
//   if (user) {
//     const group = await Group.findByPk(req.params.groupId, {
//       include: {
//         model: Membership,
//       },
//     });
//     if (!group) {
//       res.status(404);
//       return res.json({
//         message: "Group couldn't be found",
//       });
//     }
//     let flag = false;
//     for (let member of group.toJSON().Memberships) {
//       if (member.status == "co-host" && member.userId == user.id) {
//         flag = true;
//       }
//     }

//     if (group.toJSON().organizerId === user.id || flag === true) {
//       const venues = await Venue.findAll({
//         where: {
//           groupId: req.params.groupId,
//         },
//         attributes: {
//           exclude: ["updatedAt", "createdAt"],
//         },
//       });
//       if (venues.length === 0) {
//         res.status(404);
//         return res.json({
//           message: "Group has no venues",
//         });
//       }
//       return res.json({ Venues: venues });
//     } else {
//       res.status(403);
//       return res.json({
//         message: "Forbidden",
//       });
//     }
//   } else {
//     res.status(401);
//     return res.json({
//       message: "Authentication required",
//     });
//   }
// });

// router.post("/:groupId/venues", validateVenueSignup, async (req, res, next) => {
//   const { user } = req;
//   if (user) {
//     const group = await Group.findByPk(req.params.groupId, {
//       include: {
//         model: Membership,
//       },
//     });
//     if (!group) {
//       res.status(404);
//       return res.json({
//         message: "Group couldn't be found",
//       });
//     }
//     let flag = false;
//     for (let member of group.toJSON().Memberships) {
//       if (member.status == "co-host" && member.userId == user.id) {
//         flag = true;
//       }
//     }
//     if (group.toJSON().organizerId === user.id || flag === true) {
//       const { address, city, state, lat, lng } = req.body;
//       const groupId = req.params.groupId;
//       const group = await Group.findByPk(groupId);
//       if (!group) {
//         res.status(404);
//         return res.json({
//           message: "Group couldn't be found",
//         });
//       }
//       const venue = await Venue.create({
//         groupId: Number(req.params.groupId),
//         address,
//         city,
//         state,
//         lat,
//         lng,
//       });
//       const newVenue = {
//         id: venue.id,
//         groupId: venue.groupId,
//         address: venue.address,
//         city: venue.city,
//         state: venue.state,
//         lat: venue.lat,
//         lng: venue.lng,
//       };
//       return res.json(newVenue);
//     } else {
//       res.status(403);
//       return res.json({
//         message: "Forbidden",
//       });
//     }
//   } else {
//     res.status(401);
//     return res.json({
//       message: "Authentication required",
//     });
//   }
// });

// router.get("/:groupId/events", async (req, res, next) => {
//   const events = await Event.findAll({
//     where: {
//       groupId: req.params.groupId,
//     },
//     attributes: {
//       exclude: ["capacity", "price", "updatedAt", "createdAt"],
//     },
//     include: [
//       {
//         model: Group,
//         attributes: {
//           exclude: [
//             "organizerId",
//             "about",
//             "type",
//             "private",
//             "createdAt",
//             "updatedAt",
//           ],
//         },
//       },
//       {
//         model: Venue,
//         attributes: {
//           exclude: [
//             "groupId",
//             "address",
//             "lat",
//             "lng",
//             "createdAt",
//             "updatedAt",
//           ],
//         },
//       },
//       {
//         model: Attendance,
//       },
//       {
//         model: EventImage,
//       },
//     ],
//   });

//   let list = [];
//   events.forEach((event) => {
//     list.push(event.toJSON());
//   });

//   list.forEach((event) => {
//     let count = 0;
//     event.Attendances.forEach((member) => {
//       count++;
//       event.numAttending = count;
//     });
//     event.EventImages.forEach((image) => {
//       if (image.preview === true) {
//         event.previewImage = image.url;
//       }
//     });
//     delete event.EventImages;
//     delete event.Attendances;
//   });
//   if (list.length === 0) {
//     res.status(404);
//     return res.json({
//       message: "Group couldn't be found or no events exist.",
//     });
//   }
//   return res.json({
//     Events: list,
//   });
// });

// router.post("/:groupId/events", validateEventSignup, async (req, res, next) => {
//   const { user } = req;
//   if (user) {
//     const group = await Group.findByPk(req.params.groupId, {
//       include: {
//         model: Membership,
//       },
//     });
//     if (!group) {
//       res.status(404);
//       return res.json({
//         message: "Group couldn't be found",
//       });
//     }
//     let flag = false;
//     for (let member of group.toJSON().Memberships) {
//       if (member.status == "co-host" && member.userId == user.id) {
//         flag = true;
//       }
//     }
//     if (group.toJSON().organizerId === user.id || flag === true) {
//       const {
//         venueId,
//         name,
//         type,
//         capacity,
//         price,
//         description,
//         startDate,
//         endDate,
//       } = req.body;
//       const group = await Group.findByPk(req.params.groupId);
//       if (!group) {
//         res.status(404);
//         return res.json({
//           message: "Group couldn't be found",
//         });
//       }

//       const event = await Event.create({
//         venueId,
//         groupId: Number(req.params.groupId),
//         name,
//         type,
//         capacity,
//         price,
//         description,
//         startDate,
//         endDate,
//       });

//       return res.json(event);
//     } else {
//       res.status(403);
//       return res.json({
//         message: "Forbidden",
//       });
//     }
//   } else {
//     res.status(401);
//     return res.json({
//       message: "Authentication required",
//     });
//   }
// });

// router.get("/:groupId/members", async (req, res, next) => {
//   const members = await Membership.findAll({
//     where: {
//       groupId: req.params.groupId,
//     },
//     attributes: ["status"],
//     include: {
//       model: User,
//     },
//   });
//   const group = await Group.findByPk(req.params.groupId);
//   if (!group) {
//     res.status(404);
//     return res.json({
//       message: "Group couldn't be found",
//     });
//   }
//   const { user } = req;
//   if (group.toJSON().organizerId === user.id) {
//     let list = [],
//       Members = [];
//     members.forEach((member) => {
//       list.push(member.toJSON());
//     });
//     for (let i = 0; i < list.length; i++) {
//       let ele = list[i];
//       Members.push({
//         id: ele.User.id,
//         firstName: ele.User.firstName,
//         lastName: ele.User.lastName,
//         Membership: {
//           status: ele.status,
//         },
//       });
//     }
//     return res.json({ Members });
//   } else {
//     let list = [],
//       Members = [];
//     members.forEach((member) => {
//       list.push(member.toJSON());
//     });
//     for (let i = 0; i < list.length; i++) {
//       let ele = list[i];
//       if (ele.status !== "pending") {
//         Members.push({
//           id: ele.User.id,
//           firstName: ele.User.firstName,
//           lastName: ele.User.lastName,
//           Membership: {
//             status: ele.status,
//           },
//         });
//       }
//     }
//     return res.json({ Members });
//   }
// });

// router.post("/:groupId/membership", async (req, res, next) => {
//   const { user } = req;
//   if (user) {
//     const group = await Group.findByPk(req.params.groupId, {
//       include: {
//         model: Membership,
//       },
//     });
//     if (!group) {
//       res.status(404);
//       return res.json({
//         message: "Group couldn't be found",
//       });
//     }

//     for (let member of group.toJSON().Memberships) {
//       if (
//         (member.status == "co-host" && member.userId === user.id) ||
//         (member.status == "member" && member.userId === user.id)
//       ) {
//         res.status(400);
//         return res.json({
//           message: "User is already a member of the group",
//         });
//       } else if (member.status == "pending" && member.userId === user.id) {
//         res.status(400);
//         return res.json({
//           message: "Membership has already been requested",
//         });
//       }
//     }

//     const member = await Membership.create({
//       userId: user.id,
//       groupId: req.params.groupId,
//       status: "pending",
//     });
//     const newMember = {
//       memberId: member.userId,
//       status: member.status,
//     };
//     return res.json(newMember);
//   } else {
//     res.status(401);
//     return res.json({
//       message: "Authentication required",
//     });
//   }
// });

// router.put("/:groupId/membership", async (req, res, next) => {
//   const { user } = req;
//   if (user) {
//     const { status, memberId } = req.body;
//     if (status == "pending") {
//       res.status(400);
//       return res.json({
//         message: "Validations Error",
//         errors: {
//           status: "Cannot change a membership status to pending",
//         },
//       });
//     }

//     if (status !== "member" && status !== "co-host") {
//       res.status(400);
//       return res.json({
//         message: "Validations Error",
//         errors: {
//           status: "Status must be either member or co-host",
//         },
//       });
//     }

//     const group = await Group.findByPk(req.params.groupId, {
//       include: {
//         model: Membership,
//       },
//     });
//     if (!group) {
//       res.status(404);
//       return res.json({
//         message: "Group couldn't be found",
//       });
//     }
//     let flag = false;
//     for (let member of group.toJSON().Memberships) {
//       if (member.status == "co-host" && member.userId === user.id) {
//         flag = true;
//       }
//     }

//     if (group.toJSON().organizerId === user.id && status == "co-host") {
//       const { memberId, status } = req.body;
//       const memberCheck = group.toJSON();
//       let count = 0,
//         list = [];
//       for (let members of memberCheck.Memberships) {
//         if (memberId === members.userId && members.status == "member") {
//           count++;
//           const member = await Membership.findOne({
//             where: {
//               userId: memberId,
//               groupId: req.params.groupId,
//             },
//           });
//           member.status = status;
//           await member.save();
//           list.push(members);
//         }
//       }
//       if (count <= 0) {
//         res.status(400);
//         return res.json({
//           message: "Validation Error",
//           errors: {
//             memberId: "User couldn't be found",
//           },
//         });
//       } else {
//         const updatedMember = {
//           id: list[0].userId,
//           groupId: list[0].groupId,
//           memberId: memberId,
//           status: status,
//         };
//         return res.json(updatedMember);
//       }
//     } else if (
//       (group.toJSON().organizerId === user.id && status == "member") ||
//       (flag === true && status == "member")
//     ) {
//       const { memberId, status } = req.body;
//       const memberCheck = group.toJSON();
//       let count = 0,
//         list = [];
//       for (let members of memberCheck.Memberships) {
//         if (memberId === members.userId && members.status == "pending") {
//           count++;
//           const member = await Membership.findOne({
//             where: {
//               userId: memberId,
//               groupId: req.params.groupId,
//             },
//           });
//           member.status = status;
//           await member.save();
//           list.push(member.toJSON());
//         }
//       }
//       if (count <= 0) {
//         res.status(400);
//         return res.json({
//           message: "Validation Error",
//           errors: {
//             memberId: "User couldn't be found",
//           },
//         });
//       } else {
//         const updatedMember = {
//           id: list[0].userId,
//           groupId: list[0].groupId,
//           memberId: memberId,
//           status: status,
//         };
//         return res.json(updatedMember);
//       }
//     } else {
//       res.status(404);
//       return res.json({
//         message: "Membership between the user and the group does not exist",
//       });
//     }
//   } else {
//     res.status(401);
//     return res.json({
//       message: "Authentication required",
//     });
//   }
// });

// router.delete("/:groupId/membership", async (req, res, next) => {
//   const { user } = req;
//   if (user) {
//     const { memberId } = req.body;
//     const group = await Group.findByPk(req.params.groupId, {
//       include: [
//         {
//           model: Membership,
//         },
//         {
//           model: User,
//           as: "Organizer",
//         },
//       ],
//     });
//     if (!group) {
//       res.status(404);
//       return res.json({
//         message: "Group couldn't be found",
//       });
//     }
//     let flag = false,
//       count = 0,
//       flag2 = false;
//     if (group.toJSON().Memberships.length <= 0) {
//       res.status(404);
//       return res.json({
//         message: "Membership does not exist for this User",
//       });
//     }
//     for (let member of group.toJSON().Memberships) {
//       if (member.userId === user.id) {
//         flag = true;
//       }
//     }

//     if (flag === true || group.toJSON().organizerId === user.id) {
//       if (group.toJSON().organizerId === user.id) {
//         for (let member of group.toJSON().Memberships) {
//           if (memberId === member.userId) {
//             count++;
//           }
//         }
//         if (count <= 0) {
//           res.status(400);
//           return res.json({
//             message: "Validation Error",
//             errors: {
//               memberId: "User couldn't be found",
//             },
//           });
//         } else {
//           const membership = await Membership.findOne({
//             where: {
//               userId: memberId,
//             },
//           });

//           await membership.destroy();
//           return res.json({
//             message: "Successfully deleted membership from group",
//           });
//         }
//       } else {
//         for (let member of group.toJSON().Memberships) {
//           if (member.userId === user.id && memberId === member.userId) {
//             count++;
//           }
//         }
//         if (count <= 0) {
//           res.status(400);
//           return res.json({
//             message: "Validation Error",
//             errors: {
//               memberId: "User couldn't be found",
//             },
//           });
//         } else {
//           const membership = await Membership.findOne({
//             where: {
//               userId: memberId,
//             },
//           });
//           await membership.destroy();
//           return res.json({
//             message: "Successfully deleted membership from group",
//           });
//         }
//       }
//     } else {
//       res.status(404);
//       return res.json({
//         message: "Membership does not exist for this User",
//       });
//     }
//   } else {
//     res.status(401);
//     return res.json({
//       message: "Authentication required",
//     });
//   }
// });

module.exports = router;
