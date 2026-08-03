export interface ProjectItem {
	id?: number; // 唯一标识符
	title: string
	title_en?: string
	description?: string
	date?: string		//发布日期
	detail?: string //详细页路径
  	url?: string  //上线链接
	tags?: string[]
	cover?: string[]
}
export const projectItems: ProjectItem[] = [
	{
		title: "Activos 3D para San Valentín",
    title_en: "Valentine's Day 3D Assets",
    description: "Pack gratuito de iconos 3D y archivos Blender enfocado en diseño para San Valentín.",
		date: "2023-10-15",
    detail: "/detail/free-3d-valentines-assets/",
    url: "https://web.606design.art/landings/004-free-3d-valentines-assets/",
    cover: ['free-3d-valentines-assets/01.jpg','free-3d-valentines-assets/02.jpg','free-3d-valentines-assets/03.jpg','free-3d-valentines-assets/04.jpg',],
		tags: ['3D', 'WEB', 'ICON']
	},
  {
		title: "Lista de tareas en línea",
    title_en: "Online Todo List",
    description: "Aplicación web TodoList minimalista sin registro, con almacenamiento local en el navegador.",
		date: "2023-10-15",
    detail: "/detail/todo",
    url: "https://www.ricocc.com/todo/",
    cover: ['cover/cover-todo.jpg'],
		tags: ['WEB', 'UI', 'TODO']
	},
  {
		title: "Diario de vida de viaje Tink",
    title_en: "Tink Life Travel Diary",
    description: "Landing page móvil con enfoque en diseño visual y experiencia de usuario.",
		date: "2023-10-15",
		url: "https://travellife.zeabur.app/",
		detail: "/detail/tinklife",
    cover: ['travel/01.jpg','travel/02.jpg','travel/03.jpg','travel/04.jpg'],
		tags: ['WEB', 'MOBILE']
	},

];

