import del from "del";
import zipPlugin from "gulp-zip";

export const zip = () => {
    del(`./$(app.path.rootFolder).zip`);
    return app.gulp.src(`${app.path.builFoilder}/**/*.*`, {})
        .pipe(app.gulp.plumber(
            app.plugins.notify.onError({
                title: "ZIP",
                message: "Erorr <%= error.message%>"
            })
        ))
        .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest('./'));
}   