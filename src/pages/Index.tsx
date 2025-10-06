import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Course {
  id: number;
  title: string;
  period: string;
  topics: number;
  progress: number;
  icon: string;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const courses: Course[] = [
    { id: 1, title: 'Древняя Русь', period: 'IX-XIII вв', topics: 24, progress: 65, icon: 'Castle' },
    { id: 2, title: 'Российская Империя', period: 'XVIII-XIX вв', topics: 32, progress: 40, icon: 'Crown' },
    { id: 3, title: 'СССР', period: 'XX век', topics: 28, progress: 85, icon: 'Flag' },
    { id: 4, title: 'Современная Россия', period: '1991-наст.вр.', topics: 18, progress: 20, icon: 'Building' },
  ];

  const achievements: Achievement[] = [
    { id: 1, title: 'Первый шаг', description: 'Пройден первый тест', icon: 'Star', unlocked: true },
    { id: 2, title: 'Знаток Древней Руси', description: 'Завершен курс по Древней Руси', icon: 'Award', unlocked: true },
    { id: 3, title: 'Марафонец', description: '7 дней подряд занятий', icon: 'Flame', unlocked: true },
    { id: 4, title: 'Историк', description: 'Пройдено 50 тестов', icon: 'Trophy', unlocked: false },
    { id: 5, title: 'Мастер', description: 'Все курсы на 100%', icon: 'Medal', unlocked: false },
  ];

  const totalProgress = Math.round(courses.reduce((acc, course) => acc + course.progress, 0) / courses.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ИсторияPRO
              </h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Курсы', 'Тесты', 'Материалы', 'О проекте'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`font-medium transition-all hover:text-secondary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-secondary to-accent hover:opacity-90">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <>
          <section className="container mx-auto px-4 py-20 text-center">
            <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
                Подготовка к ЕГЭ и ОГЭ 2025
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold font-heading bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                История — это просто!
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Твой путь к высоким баллам начинается здесь. Интерактивные курсы, тесты и визуализация прогресса помогут достичь цели
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-lg px-8">
                  Начать обучение
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/5">
                  Пройти тест
                </Button>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-slide-up">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-4">
                    <Icon name="BookOpen" size={24} className="text-white" />
                  </div>
                  <CardTitle className="font-heading">120+ уроков</CardTitle>
                  <CardDescription>Структурированные материалы по всем периодам истории России</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Target" size={24} className="text-white" />
                  </div>
                  <CardTitle className="font-heading">500+ тестов</CardTitle>
                  <CardDescription>Практика по формату ЕГЭ и ОГЭ с подробным разбором</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-yellow-500 rounded-full flex items-center justify-center mb-4">
                    <Icon name="TrendingUp" size={24} className="text-white" />
                  </div>
                  <CardTitle className="font-heading">Твой прогресс</CardTitle>
                  <CardDescription>Визуализация достижений и мотивация каждый день</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          <section className="bg-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-bold font-heading text-primary mb-4">Твой прогресс обучения</h3>
                  <p className="text-gray-600 text-lg">Отслеживай свои достижения и двигайся к цели</p>
                </div>

                <Card className="mb-12 border-2 border-primary/20 shadow-xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl font-heading">Общий прогресс</CardTitle>
                        <CardDescription>Средний показатель по всем курсам</CardDescription>
                      </div>
                      <div className="text-5xl font-bold font-heading bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                        {totalProgress}%
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={totalProgress} className="h-4" />
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {courses.map((course, index) => (
                    <Card key={course.id} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                              <Icon name={course.icon} size={28} className="text-white" />
                            </div>
                            <div>
                              <CardTitle className="font-heading mb-1">{course.title}</CardTitle>
                              <CardDescription className="text-sm">{course.period}</CardDescription>
                              <Badge variant="outline" className="mt-2">
                                {course.topics} тем
                              </Badge>
                            </div>
                          </div>
                          <span className="text-2xl font-bold font-heading text-primary">{course.progress}%</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Progress value={course.progress} className="h-3" />
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-none shadow-xl bg-gradient-to-br from-primary to-blue-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-3xl font-heading flex items-center gap-3">
                      <Icon name="Award" size={32} />
                      Достижения
                    </CardTitle>
                    <CardDescription className="text-blue-100">Собирай награды за свои успехи</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {achievements.map((achievement) => (
                        <div
                          key={achievement.id}
                          className={`text-center p-4 rounded-xl transition-all ${
                            achievement.unlocked
                              ? 'bg-white/20 hover:bg-white/30'
                              : 'bg-white/5 opacity-50'
                          }`}
                        >
                          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 ${
                            achievement.unlocked
                              ? 'bg-gradient-to-br from-accent to-yellow-500'
                              : 'bg-gray-500'
                          }`}>
                            <Icon name={achievement.icon} size={28} className="text-white" />
                          </div>
                          <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                          <p className="text-xs text-blue-100">{achievement.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-4xl font-bold font-heading text-primary mb-6">О проекте</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                ИсторияPRO — это образовательная платформа для подготовки к ЕГЭ и ОГЭ по истории России. 
                Мы создали систему, которая делает изучение истории увлекательным и эффективным. 
                Отслеживай прогресс, зарабатывай достижения и достигай своих целей!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-4">
                    <Icon name="Users" size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold font-heading text-xl mb-2">10 000+</h4>
                  <p className="text-gray-600">учеников доверяют нам</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Icon name="CheckCircle" size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold font-heading text-xl mb-2">85+</h4>
                  <p className="text-gray-600">средний балл выпускников</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-500 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Calendar" size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold font-heading text-xl mb-2">3 года</h4>
                  <p className="text-gray-600">помогаем сдавать экзамены</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="GraduationCap" size={28} />
            <h4 className="text-xl font-bold font-heading">ИсторияPRO</h4>
          </div>
          <p className="text-blue-200 mb-6">Твой путь к высоким баллам на ЕГЭ и ОГЭ</p>
          <div className="flex gap-6 justify-center mb-6">
            <a href="#" className="hover:text-accent transition-colors">Курсы</a>
            <a href="#" className="hover:text-accent transition-colors">Тесты</a>
            <a href="#" className="hover:text-accent transition-colors">Материалы</a>
            <a href="#" className="hover:text-accent transition-colors">О проекте</a>
          </div>
          <p className="text-sm text-blue-300">© 2025 ИсторияPRO. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
