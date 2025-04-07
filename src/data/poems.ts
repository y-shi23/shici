export interface Poem {
  title: string
  author: string
  dynasty: string
  content: string
  appreciation: string
}

export const poems: Poem[] = [
  {
    title: "梦微之",
    author: "白居易",
    dynasty: "唐",
    content: "夜来携手梦同游，晨起盈巾泪莫收。\n漳浦老身三度病，咸阳宿草八回秋。\n君埋泉下泥销骨，我寄人间雪满头。\n阿卫韩郎相次去，夜台茫昧得知不？\n",
    appreciation: ""
  },
  {
    title: "登鹳雀楼",
    author: "王之涣",
    dynasty: "唐",
    content: "白日依山尽，\n黄河入海流。\n欲穷千里目，\n更上一层楼。",
    appreciation: "这首诗以登高望远为主题，通过'白日'、'黄河'等壮阔的自然景象，展现了诗人开阔的胸襟。后两句'欲穷千里目，更上一层楼'，既是对眼前景色的描写，又暗含人生哲理，表达了不断进取、追求更高境界的志向。全诗气势磅礴，意境深远，是唐代登高诗的代表作。"
  },
  {
    title: "春晓",
    author: "孟浩然",
    dynasty: "唐",
    content: "春眠不觉晓，\n处处闻啼鸟。\n夜来风雨声，\n花落知多少。",
    appreciation: "这首诗以春天早晨为背景，通过'春眠'、'啼鸟'、'风雨声'等意象，展现了一幅生机盎然的春景图。诗人以细腻的笔触，描写了春天特有的慵懒与活力。'花落知多少'一句，既是对昨夜风雨的感慨，又暗含对春光易逝的惋惜。全诗语言清新自然，意境优美，是孟浩然山水田园诗的代表作。"
  }
] 