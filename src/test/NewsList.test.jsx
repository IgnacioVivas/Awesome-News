import { React } from "react";
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from "vitest";
import { render } from "../test-utils";
import NewsList from "../components/NewsList";

describe("News List", () => {
const props = {
    orderedDataForDate: [
        [
            {
                body: "Sint dolorem dolor. Quia architecto esse praesentium. Odio voluptatem ipsa doloribus dolorem ex. Non qui doloremque sed itaque magni cumque nulla. Et quibusdam rerum.\n \rEa ea assumenda velit enim totam. Et aut quidem voluptatem impedit ipsum occaecati nesciunt ea. Et quia quo aperiam.\n \rSunt eos velit delectus blanditiis quibusdam cum. Aut nam tenetur rerum qui error veniam rerum aut temporibus. Autem et magnam voluptatem alias vitae in laudantium. Maiores ipsam dolorem. Eos sit vel voluptatem voluptatem quo ut magni velit. Officiis sunt non cumque eius repudiandae est sunt reprehenderit.\n \rReprehenderit et eligendi itaque quibusdam. Cumque ea aut officiis quae aperiam. Quam laudantium fuga laudantium consequatur.\n \rEst unde nihil odit reiciendis ex. Animi ut sunt a odio modi ea expedita enim dolor. Repellat laudantium dicta doloremque. Ut ut eum officia nesciunt incidunt fugit cum hic odit. Eaque odio est alias. Neque repellat cupiditate deserunt aut magni et totam odit.\n \rVoluptatem laudantium officia et est iure saepe ut ullam. Voluptas ratione minus hic sequi velit alias in modi. Eaque quia eos dicta. Aut iusto et maxime est est odit voluptatibus et. Ducimus quisquam dignissimos tempore odit incidunt veritatis illo officiis error. Nobis sit quod ducimus nulla quasi ea rem rerum.\n \rPariatur error quasi provident laborum odit corrupti accusamus. Non nihil eligendi itaque dolore sint. Eaque at tenetur cum quam. Voluptatum omnis a aut. Similique et omnis. Commodi et reprehenderit deserunt.",
                category: "environment",
                createdAt: "2021-02-02T20:08:15.733Z",
                id: "f1f8605f-2bdc-451c-8660-ccefd7df15dc",
                imageUrl: "http://placeimg.com/600/300/environment",
                subtitle: "In sit libero quia ratione animi nam laboriosam qui ex quia expedita illum ratione aut autem corrupti eos possimus.",
                thumbnailUrl: "http://placeimg.com/300/300/environment",
                title: "nulla neque minima adipisci laboriosam dolor quia rerum ducimus dolore",
                views: 3060
            },
            {
                body: "Quod ut neque sapiente voluptas distinctio eos. Molestiae rerum est reiciendis ullam. Dicta suscipit veniam dolores aliquam qui voluptatem vel. Itaque ab dolores harum. Et ut optio nihil sunt necessitatibus atque.\n \rEx omnis delectus repellendus. Accusantium est quos. Corrupti et consequatur sequi dolorem necessitatibus soluta dolore. Expedita aut ut non soluta. Tempore et eum nam rerum quia qui ipsam officiis ipsam.\n \rAut harum velit quas quo sit quo. Assumenda neque illo. Numquam corrupti dolorum voluptas ab eius laudantium autem placeat.\n \rLabore accusamus est qui hic. Voluptates assumenda voluptatem qui architecto adipisci et. Non dolorem perferendis iusto doloremque est itaque consequatur saepe dolorem. Est debitis reiciendis quae voluptatem eaque. Sunt eum est sit. Autem qui et qui sit et blanditiis iusto.\n \rEum at velit. Dignissimos voluptatem magnam porro voluptas tempora optio vitae exercitationem. Voluptate ut consequatur quia omnis maiores aut et. Voluptate dolor eveniet qui est cumque quam porro reiciendis accusamus. Voluptatibus vitae dolores corrupti et repudiandae.",
                category: "entertainment",
                createdAt: "2021-02-03T08:20:38.152Z",
                id: "68333457-cce7-4709-8768-35b3c724778f",
                imageUrl: "http://placeimg.com/600/300/entertainment",
                subtitle: "Soluta aut doloremque ut ut ipsam cumque nemo dolor minima dignissimos ut ut tempora qui.",
                thumbnailUrl: "http://placeimg.com/300/300/entertainment",
                title: "tempore libero voluptatem soluta alias vel",
                views: 3067
            },
            {
                body: "Numquam laudantium velit. Nihil ut dolore qui. Et modi magni officia cumque iusto maxime ut explicabo error. Assumenda dolor libero qui iusto molestiae hic eaque sit.\n \rMolestiae doloribus natus facilis est est incidunt. Atque quod quas ea. Quia voluptas assumenda dolorem quae doloremque atque consequatur non. Nemo doloribus velit recusandae est voluptatem earum asperiores.\n \rVoluptas qui expedita. Vitae reiciendis sed sit quis iusto. Nobis qui numquam. Non suscipit sed laboriosam et esse voluptatem ut voluptatem.\n \rAut est harum fugiat impedit quos alias nulla aut. Rerum perferendis sint in. Aut in aut facilis et perferendis nam. Assumenda quam perferendis iste repellat. Ipsa repellendus voluptatem dolores porro sed et. Modi quae optio voluptatibus.\n \rVitae dolores tenetur et libero voluptas magnam sit. Aut qui quis. Soluta saepe eligendi sit.",
                category: "entertainment",
                createdAt: "2021-02-03T10:28:03.831Z",
                id: "814aed81-9373-46e4-9af4-3cd478080bc9",
                imageUrl: "http://placeimg.com/600/300/entertainment",
                subtitle: "Perferendis et cumque error eligendi ducimus eum voluptatibus mollitia nesciunt est recusandae quam est voluptatem quod ut quo dolor.",
                thumbnailUrl: "http://placeimg.com/300/300/entertainment",
                title: "eos ut enim dolor est eos eum nam error ut",
                views: 567,
            }
        ],
        [
            {
                body: "Sint dolorem dolor. Quia architecto esse praesentium. Odio voluptatem ipsa doloribus dolorem ex. Non qui doloremque sed itaque magni cumque nulla. Et quibusdam rerum.\n \rEa ea assumenda velit enim totam. Et aut quidem voluptatem impedit ipsum occaecati nesciunt ea. Et quia quo aperiam.\n \rSunt eos velit delectus blanditiis quibusdam cum. Aut nam tenetur rerum qui error veniam rerum aut temporibus. Autem et magnam voluptatem alias vitae in laudantium. Maiores ipsam dolorem. Eos sit vel voluptatem voluptatem quo ut magni velit. Officiis sunt non cumque eius repudiandae est sunt reprehenderit.\n \rReprehenderit et eligendi itaque quibusdam. Cumque ea aut officiis quae aperiam. Quam laudantium fuga laudantium consequatur.\n \rEst unde nihil odit reiciendis ex. Animi ut sunt a odio modi ea expedita enim dolor. Repellat laudantium dicta doloremque. Ut ut eum officia nesciunt incidunt fugit cum hic odit. Eaque odio est alias. Neque repellat cupiditate deserunt aut magni et totam odit.\n \rVoluptatem laudantium officia et est iure saepe ut ullam. Voluptas ratione minus hic sequi velit alias in modi. Eaque quia eos dicta. Aut iusto et maxime est est odit voluptatibus et. Ducimus quisquam dignissimos tempore odit incidunt veritatis illo officiis error. Nobis sit quod ducimus nulla quasi ea rem rerum.\n \rPariatur error quasi provident laborum odit corrupti accusamus. Non nihil eligendi itaque dolore sint. Eaque at tenetur cum quam. Voluptatum omnis a aut. Similique et omnis. Commodi et reprehenderit deserunt.",
                category: "environment",
                createdAt: "2021-02-02T20:08:15.733Z",
                id: "f1f8605f-2bdc-451c-8660-ccefd7df15dc",
                imageUrl: "http://placeimg.com/600/300/environment",
                subtitle: "In sit libero quia ratione animi nam laboriosam qui ex quia expedita illum ratione aut autem corrupti eos possimus.",
                thumbnailUrl: "http://placeimg.com/300/300/environment",
                title: "nulla neque minima adipisci laboriosam dolor quia rerum ducimus dolore",
                views: 3060
            },
            {
                body: "Quod ut neque sapiente voluptas distinctio eos. Molestiae rerum est reiciendis ullam. Dicta suscipit veniam dolores aliquam qui voluptatem vel. Itaque ab dolores harum. Et ut optio nihil sunt necessitatibus atque.\n \rEx omnis delectus repellendus. Accusantium est quos. Corrupti et consequatur sequi dolorem necessitatibus soluta dolore. Expedita aut ut non soluta. Tempore et eum nam rerum quia qui ipsam officiis ipsam.\n \rAut harum velit quas quo sit quo. Assumenda neque illo. Numquam corrupti dolorum voluptas ab eius laudantium autem placeat.\n \rLabore accusamus est qui hic. Voluptates assumenda voluptatem qui architecto adipisci et. Non dolorem perferendis iusto doloremque est itaque consequatur saepe dolorem. Est debitis reiciendis quae voluptatem eaque. Sunt eum est sit. Autem qui et qui sit et blanditiis iusto.\n \rEum at velit. Dignissimos voluptatem magnam porro voluptas tempora optio vitae exercitationem. Voluptate ut consequatur quia omnis maiores aut et. Voluptate dolor eveniet qui est cumque quam porro reiciendis accusamus. Voluptatibus vitae dolores corrupti et repudiandae.",
                category: "entertainment",
                createdAt: "2021-02-03T08:20:38.152Z",
                id: "68333457-cce7-4709-8768-35b3c724778f",
                imageUrl: "http://placeimg.com/600/300/entertainment",
                subtitle: "Soluta aut doloremque ut ut ipsam cumque nemo dolor minima dignissimos ut ut tempora qui.",
                thumbnailUrl: "http://placeimg.com/300/300/entertainment",
                title: "tempore libero voluptatem soluta alias vel",
                views: 3067
            },
            {
                body: "Numquam laudantium velit. Nihil ut dolore qui. Et modi magni officia cumque iusto maxime ut explicabo error. Assumenda dolor libero qui iusto molestiae hic eaque sit.\n \rMolestiae doloribus natus facilis est est incidunt. Atque quod quas ea. Quia voluptas assumenda dolorem quae doloremque atque consequatur non. Nemo doloribus velit recusandae est voluptatem earum asperiores.\n \rVoluptas qui expedita. Vitae reiciendis sed sit quis iusto. Nobis qui numquam. Non suscipit sed laboriosam et esse voluptatem ut voluptatem.\n \rAut est harum fugiat impedit quos alias nulla aut. Rerum perferendis sint in. Aut in aut facilis et perferendis nam. Assumenda quam perferendis iste repellat. Ipsa repellendus voluptatem dolores porro sed et. Modi quae optio voluptatibus.\n \rVitae dolores tenetur et libero voluptas magnam sit. Aut qui quis. Soluta saepe eligendi sit.",
                category: "entertainment",
                createdAt: "2021-02-03T10:28:03.831Z",
                id: "814aed81-9373-46e4-9af4-3cd478080bc9",
                imageUrl: "http://placeimg.com/600/300/entertainment",
                subtitle: "Perferendis et cumque error eligendi ducimus eum voluptatibus mollitia nesciunt est recusandae quam est voluptatem quod ut quo dolor.",
                thumbnailUrl: "http://placeimg.com/300/300/entertainment",
                title: "eos ut enim dolor est eos eum nam error ut",
                views: 567,
            }
        ]
    ],
    orderedDataForViews:[
        [
            {
                body: "Sint dolorem dolor. Quia architecto esse praesentium. Odio voluptatem ipsa doloribus dolorem ex. Non qui doloremque sed itaque magni cumque nulla. Et quibusdam rerum.\n \rEa ea assumenda velit enim totam. Et aut quidem voluptatem impedit ipsum occaecati nesciunt ea. Et quia quo aperiam.\n \rSunt eos velit delectus blanditiis quibusdam cum. Aut nam tenetur rerum qui error veniam rerum aut temporibus. Autem et magnam voluptatem alias vitae in laudantium. Maiores ipsam dolorem. Eos sit vel voluptatem voluptatem quo ut magni velit. Officiis sunt non cumque eius repudiandae est sunt reprehenderit.\n \rReprehenderit et eligendi itaque quibusdam. Cumque ea aut officiis quae aperiam. Quam laudantium fuga laudantium consequatur.\n \rEst unde nihil odit reiciendis ex. Animi ut sunt a odio modi ea expedita enim dolor. Repellat laudantium dicta doloremque. Ut ut eum officia nesciunt incidunt fugit cum hic odit. Eaque odio est alias. Neque repellat cupiditate deserunt aut magni et totam odit.\n \rVoluptatem laudantium officia et est iure saepe ut ullam. Voluptas ratione minus hic sequi velit alias in modi. Eaque quia eos dicta. Aut iusto et maxime est est odit voluptatibus et. Ducimus quisquam dignissimos tempore odit incidunt veritatis illo officiis error. Nobis sit quod ducimus nulla quasi ea rem rerum.\n \rPariatur error quasi provident laborum odit corrupti accusamus. Non nihil eligendi itaque dolore sint. Eaque at tenetur cum quam. Voluptatum omnis a aut. Similique et omnis. Commodi et reprehenderit deserunt.",
                category: "environment",
                createdAt: "2021-02-02T20:08:15.733Z",
                id: "f1f8605f-2bdc-451c-8660-ccefd7df15dc",
                imageUrl: "http://placeimg.com/600/300/environment",
                subtitle: "In sit libero quia ratione animi nam laboriosam qui ex quia expedita illum ratione aut autem corrupti eos possimus.",
                thumbnailUrl: "http://placeimg.com/300/300/environment",
                title: "nulla neque minima adipisci laboriosam dolor quia rerum ducimus dolore",
                views: 3099
            },
            {
                body: "Quod ut neque sapiente voluptas distinctio eos. Molestiae rerum est reiciendis ullam. Dicta suscipit veniam dolores aliquam qui voluptatem vel. Itaque ab dolores harum. Et ut optio nihil sunt necessitatibus atque.\n \rEx omnis delectus repellendus. Accusantium est quos. Corrupti et consequatur sequi dolorem necessitatibus soluta dolore. Expedita aut ut non soluta. Tempore et eum nam rerum quia qui ipsam officiis ipsam.\n \rAut harum velit quas quo sit quo. Assumenda neque illo. Numquam corrupti dolorum voluptas ab eius laudantium autem placeat.\n \rLabore accusamus est qui hic. Voluptates assumenda voluptatem qui architecto adipisci et. Non dolorem perferendis iusto doloremque est itaque consequatur saepe dolorem. Est debitis reiciendis quae voluptatem eaque. Sunt eum est sit. Autem qui et qui sit et blanditiis iusto.\n \rEum at velit. Dignissimos voluptatem magnam porro voluptas tempora optio vitae exercitationem. Voluptate ut consequatur quia omnis maiores aut et. Voluptate dolor eveniet qui est cumque quam porro reiciendis accusamus. Voluptatibus vitae dolores corrupti et repudiandae.",
                category: "entertainment",
                createdAt: "2021-02-03T08:20:38.152Z",
                id: "68333457-cce7-4709-8768-35b3c724778f",
                imageUrl: "http://placeimg.com/600/300/entertainment",
                subtitle: "Soluta aut doloremque ut ut ipsam cumque nemo dolor minima dignissimos ut ut tempora qui.",
                thumbnailUrl: "http://placeimg.com/300/300/entertainment",
                title: "tempore libero voluptatem soluta alias vel",
                views: 3067
            },
            {
                body: "Numquam laudantium velit. Nihil ut dolore qui. Et modi magni officia cumque iusto maxime ut explicabo error. Assumenda dolor libero qui iusto molestiae hic eaque sit.\n \rMolestiae doloribus natus facilis est est incidunt. Atque quod quas ea. Quia voluptas assumenda dolorem quae doloremque atque consequatur non. Nemo doloribus velit recusandae est voluptatem earum asperiores.\n \rVoluptas qui expedita. Vitae reiciendis sed sit quis iusto. Nobis qui numquam. Non suscipit sed laboriosam et esse voluptatem ut voluptatem.\n \rAut est harum fugiat impedit quos alias nulla aut. Rerum perferendis sint in. Aut in aut facilis et perferendis nam. Assumenda quam perferendis iste repellat. Ipsa repellendus voluptatem dolores porro sed et. Modi quae optio voluptatibus.\n \rVitae dolores tenetur et libero voluptas magnam sit. Aut qui quis. Soluta saepe eligendi sit.",
                category: "entertainment",
                createdAt: "2021-02-03T10:28:03.831Z",
                id: "814aed81-9373-46e4-9af4-3cd478080bc9",
                imageUrl: "http://placeimg.com/600/300/entertainment",
                subtitle: "Perferendis et cumque error eligendi ducimus eum voluptatibus mollitia nesciunt est recusandae quam est voluptatem quod ut quo dolor.",
                thumbnailUrl: "http://placeimg.com/300/300/entertainment",
                title: "eos ut enim dolor est eos eum nam error ut",
                views: 567,
            }
        ],
        [
            {
                body: "Sint dolorem dolor. Quia architecto esse praesentium. Odio voluptatem ipsa doloribus dolorem ex. Non qui doloremque sed itaque magni cumque nulla. Et quibusdam rerum.\n \rEa ea assumenda velit enim totam. Et aut quidem voluptatem impedit ipsum occaecati nesciunt ea. Et quia quo aperiam.\n \rSunt eos velit delectus blanditiis quibusdam cum. Aut nam tenetur rerum qui error veniam rerum aut temporibus. Autem et magnam voluptatem alias vitae in laudantium. Maiores ipsam dolorem. Eos sit vel voluptatem voluptatem quo ut magni velit. Officiis sunt non cumque eius repudiandae est sunt reprehenderit.\n \rReprehenderit et eligendi itaque quibusdam. Cumque ea aut officiis quae aperiam. Quam laudantium fuga laudantium consequatur.\n \rEst unde nihil odit reiciendis ex. Animi ut sunt a odio modi ea expedita enim dolor. Repellat laudantium dicta doloremque. Ut ut eum officia nesciunt incidunt fugit cum hic odit. Eaque odio est alias. Neque repellat cupiditate deserunt aut magni et totam odit.\n \rVoluptatem laudantium officia et est iure saepe ut ullam. Voluptas ratione minus hic sequi velit alias in modi. Eaque quia eos dicta. Aut iusto et maxime est est odit voluptatibus et. Ducimus quisquam dignissimos tempore odit incidunt veritatis illo officiis error. Nobis sit quod ducimus nulla quasi ea rem rerum.\n \rPariatur error quasi provident laborum odit corrupti accusamus. Non nihil eligendi itaque dolore sint. Eaque at tenetur cum quam. Voluptatum omnis a aut. Similique et omnis. Commodi et reprehenderit deserunt.",
                category: "environment",
                createdAt: "2021-02-02T20:08:15.733Z",
                id: "f1f8605f-2bdc-451c-8660-ccefd7df15dc",
                imageUrl: "http://placeimg.com/600/300/environment",
                subtitle: "In sit libero quia ratione animi nam laboriosam qui ex quia expedita illum ratione aut autem corrupti eos possimus.",
                thumbnailUrl: "http://placeimg.com/300/300/environment",
                title: "nulla neque minima adipisci laboriosam dolor quia rerum ducimus dolore",
                views: 3099
            },
            {
                body: "Quod ut neque sapiente voluptas distinctio eos. Molestiae rerum est reiciendis ullam. Dicta suscipit veniam dolores aliquam qui voluptatem vel. Itaque ab dolores harum. Et ut optio nihil sunt necessitatibus atque.\n \rEx omnis delectus repellendus. Accusantium est quos. Corrupti et consequatur sequi dolorem necessitatibus soluta dolore. Expedita aut ut non soluta. Tempore et eum nam rerum quia qui ipsam officiis ipsam.\n \rAut harum velit quas quo sit quo. Assumenda neque illo. Numquam corrupti dolorum voluptas ab eius laudantium autem placeat.\n \rLabore accusamus est qui hic. Voluptates assumenda voluptatem qui architecto adipisci et. Non dolorem perferendis iusto doloremque est itaque consequatur saepe dolorem. Est debitis reiciendis quae voluptatem eaque. Sunt eum est sit. Autem qui et qui sit et blanditiis iusto.\n \rEum at velit. Dignissimos voluptatem magnam porro voluptas tempora optio vitae exercitationem. Voluptate ut consequatur quia omnis maiores aut et. Voluptate dolor eveniet qui est cumque quam porro reiciendis accusamus. Voluptatibus vitae dolores corrupti et repudiandae.",
                category: "entertainment",
                createdAt: "2021-02-03T08:20:38.152Z",
                id: "68333457-cce7-4709-8768-35b3c724778f",
                imageUrl: "http://placeimg.com/600/300/entertainment",
                subtitle: "Soluta aut doloremque ut ut ipsam cumque nemo dolor minima dignissimos ut ut tempora qui.",
                thumbnailUrl: "http://placeimg.com/300/300/entertainment",
                title: "tempore libero voluptatem soluta alias vel",
                views: 3067
            },
            {
                body: "Numquam laudantium velit. Nihil ut dolore qui. Et modi magni officia cumque iusto maxime ut explicabo error. Assumenda dolor libero qui iusto molestiae hic eaque sit.\n \rMolestiae doloribus natus facilis est est incidunt. Atque quod quas ea. Quia voluptas assumenda dolorem quae doloremque atque consequatur non. Nemo doloribus velit recusandae est voluptatem earum asperiores.\n \rVoluptas qui expedita. Vitae reiciendis sed sit quis iusto. Nobis qui numquam. Non suscipit sed laboriosam et esse voluptatem ut voluptatem.\n \rAut est harum fugiat impedit quos alias nulla aut. Rerum perferendis sint in. Aut in aut facilis et perferendis nam. Assumenda quam perferendis iste repellat. Ipsa repellendus voluptatem dolores porro sed et. Modi quae optio voluptatibus.\n \rVitae dolores tenetur et libero voluptas magnam sit. Aut qui quis. Soluta saepe eligendi sit.",
                category: "entertainment",
                createdAt: "2021-02-03T10:28:03.831Z",
                id: "814aed81-9373-46e4-9af4-3cd478080bc9",
                imageUrl: "http://placeimg.com/600/300/entertainment",
                subtitle: "Perferendis et cumque error eligendi ducimus eum voluptatibus mollitia nesciunt est recusandae quam est voluptatem quod ut quo dolor.",
                thumbnailUrl: "http://placeimg.com/300/300/entertainment",
                title: "eos ut enim dolor est eos eum nam error ut",
                views: 567,
            }
        ],
        [
            {
                body: "Sint dolorem dolor. Quia architecto esse praesentium. Odio voluptatem ipsa doloribus dolorem ex. Non qui doloremque sed itaque magni cumque nulla. Et quibusdam rerum.\n \rEa ea assumenda velit enim totam. Et aut quidem voluptatem impedit ipsum occaecati nesciunt ea. Et quia quo aperiam.\n \rSunt eos velit delectus blanditiis quibusdam cum. Aut nam tenetur rerum qui error veniam rerum aut temporibus. Autem et magnam voluptatem alias vitae in laudantium. Maiores ipsam dolorem. Eos sit vel voluptatem voluptatem quo ut magni velit. Officiis sunt non cumque eius repudiandae est sunt reprehenderit.\n \rReprehenderit et eligendi itaque quibusdam. Cumque ea aut officiis quae aperiam. Quam laudantium fuga laudantium consequatur.\n \rEst unde nihil odit reiciendis ex. Animi ut sunt a odio modi ea expedita enim dolor. Repellat laudantium dicta doloremque. Ut ut eum officia nesciunt incidunt fugit cum hic odit. Eaque odio est alias. Neque repellat cupiditate deserunt aut magni et totam odit.\n \rVoluptatem laudantium officia et est iure saepe ut ullam. Voluptas ratione minus hic sequi velit alias in modi. Eaque quia eos dicta. Aut iusto et maxime est est odit voluptatibus et. Ducimus quisquam dignissimos tempore odit incidunt veritatis illo officiis error. Nobis sit quod ducimus nulla quasi ea rem rerum.\n \rPariatur error quasi provident laborum odit corrupti accusamus. Non nihil eligendi itaque dolore sint. Eaque at tenetur cum quam. Voluptatum omnis a aut. Similique et omnis. Commodi et reprehenderit deserunt.",
                category: "environment",
                createdAt: "2021-02-02T20:08:15.733Z",
                id: "f1f8605f-2bdc-451c-8660-ccefd7df15dc",
                imageUrl: "http://placeimg.com/600/300/environment",
                subtitle: "In sit libero quia ratione animi nam laboriosam qui ex quia expedita illum ratione aut autem corrupti eos possimus.",
                thumbnailUrl: "http://placeimg.com/300/300/environment",
                title: "nulla neque minima adipisci laboriosam dolor quia rerum ducimus dolore",
                views: 3099
            },
            {
                body: "Quod ut neque sapiente voluptas distinctio eos. Molestiae rerum est reiciendis ullam. Dicta suscipit veniam dolores aliquam qui voluptatem vel. Itaque ab dolores harum. Et ut optio nihil sunt necessitatibus atque.\n \rEx omnis delectus repellendus. Accusantium est quos. Corrupti et consequatur sequi dolorem necessitatibus soluta dolore. Expedita aut ut non soluta. Tempore et eum nam rerum quia qui ipsam officiis ipsam.\n \rAut harum velit quas quo sit quo. Assumenda neque illo. Numquam corrupti dolorum voluptas ab eius laudantium autem placeat.\n \rLabore accusamus est qui hic. Voluptates assumenda voluptatem qui architecto adipisci et. Non dolorem perferendis iusto doloremque est itaque consequatur saepe dolorem. Est debitis reiciendis quae voluptatem eaque. Sunt eum est sit. Autem qui et qui sit et blanditiis iusto.\n \rEum at velit. Dignissimos voluptatem magnam porro voluptas tempora optio vitae exercitationem. Voluptate ut consequatur quia omnis maiores aut et. Voluptate dolor eveniet qui est cumque quam porro reiciendis accusamus. Voluptatibus vitae dolores corrupti et repudiandae.",
                category: "entertainment",
                createdAt: "2021-02-03T08:20:38.152Z",
                id: "68333457-cce7-4709-8768-35b3c724778f",
                imageUrl: "http://placeimg.com/600/300/entertainment",
                subtitle: "Soluta aut doloremque ut ut ipsam cumque nemo dolor minima dignissimos ut ut tempora qui.",
                thumbnailUrl: "http://placeimg.com/300/300/entertainment",
                title: "tempore libero voluptatem soluta alias vel",
                views: 3067
            },
            {
                body: "Numquam laudantium velit. Nihil ut dolore qui. Et modi magni officia cumque iusto maxime ut explicabo error. Assumenda dolor libero qui iusto molestiae hic eaque sit.\n \rMolestiae doloribus natus facilis est est incidunt. Atque quod quas ea. Quia voluptas assumenda dolorem quae doloremque atque consequatur non. Nemo doloribus velit recusandae est voluptatem earum asperiores.\n \rVoluptas qui expedita. Vitae reiciendis sed sit quis iusto. Nobis qui numquam. Non suscipit sed laboriosam et esse voluptatem ut voluptatem.\n \rAut est harum fugiat impedit quos alias nulla aut. Rerum perferendis sint in. Aut in aut facilis et perferendis nam. Assumenda quam perferendis iste repellat. Ipsa repellendus voluptatem dolores porro sed et. Modi quae optio voluptatibus.\n \rVitae dolores tenetur et libero voluptas magnam sit. Aut qui quis. Soluta saepe eligendi sit.",
                category: "entertainment",
                createdAt: "2021-02-03T10:28:03.831Z",
                id: "814aed81-9373-46e4-9af4-3cd478080bc9",
                imageUrl: "http://placeimg.com/600/300/entertainment",
                subtitle: "Perferendis et cumque error eligendi ducimus eum voluptatibus mollitia nesciunt est recusandae quam est voluptatem quod ut quo dolor.",
                thumbnailUrl: "http://placeimg.com/300/300/entertainment",
                title: "eos ut enim dolor est eos eum nam error ut",
                views: 567,
            }
        ]
    ],
};

  it("renderize correctly the Top rated cards", () => {
    const component = render(
        <MemoryRouter initialEntries={[{ pathname: '/top-rated' }]}>
        <NewsList orderedDataForDate={props.orderedDataForDate} orderedDataForViews={props.orderedDataForViews}/>
      </MemoryRouter>);

    const ratedContainer = component.container.querySelector('#ratedContainer');
    expect(ratedContainer).toBeDefined();

  });

  it("renderize correctly recent news cards", () => {
    const component = render(
        <MemoryRouter initialEntries={[{ pathname: '/awesome-news/' }]}>
        <NewsList orderedDataForDate={props.orderedDataForDate} orderedDataForViews={props.orderedDataForViews}/>
      </MemoryRouter>);

    const ratedContainer = component.container.querySelector('#timeContainer');
    expect(ratedContainer).toBeDefined();

  });

});