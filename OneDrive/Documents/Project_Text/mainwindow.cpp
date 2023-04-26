
#include "mainwindow.h"
#include "./ui_mainwindow.h"
#include "QFontDialog"
#include "QFont"
#include "QAction"
MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    this->setCentralWidget(ui->textEdit);
}

MainWindow::~MainWindow()
{
    delete ui;
}
void MainWindow::on_actionFont_triggered()
{
    bool ok;
    QFont font=QFontDialog::getFont(&ok,this);
    if(ok){
        ui->textEdit->setFont(font);
    }else{
        return;
    }
}


void MainWindow::on_actionSuperscript_triggered()
{

    QTextCharFormat superscriptFormat;
    superscriptFormat.setVerticalAlignment(QTextCharFormat::AlignSuperScript);


    QTextCursor csr = ui->textEdit->textCursor();


    csr.setCharFormat(superscriptFormat);


}


void MainWindow::on_actionSubscript_triggered()
{

    QTextCharFormat subscriptFormat;
    subscriptFormat.setVerticalAlignment(QTextCharFormat::AlignSubScript);


    QTextCursor csr = ui->textEdit->textCursor();


    csr.setCharFormat(subscriptFormat);

}









