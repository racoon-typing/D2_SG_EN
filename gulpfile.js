import gulp from "gulp";
import { path } from "./gulp/config/path.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Импорт задач
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { plugins } from "./gulp/config/plugins.js";
import { server } from "./gulp/tasks/server.js";
import { styles } from './gulp/tasks/less.js';
import { copy } from './gulp/tasks/copy.js';
import { copyJs } from './gulp/tasks/js.js';

// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(app.path.watch.html, html);
    gulp.watch(app.path.watch.less, styles);
}

const mainTasks = gulp.parallel(copy, copyJs, html, styles);

// Сценарий выполнения
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Выполнение сценария по умолчанию
gulp.task('default', dev);